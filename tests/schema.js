const clone = require('clone');

const getListOfTypes = (schema) => {
	return Array.isArray(schema.type)
		? schema.type
		: [schema.type];
};

const getMinItems = (schema) => {
	if (schema.maxItems != null && schema.maxItems > 0) {
		// it is common that defined maxItems means dealing with exhaustiveness of enum field configuration
		return schema.maxItems;
	}
	if (schema.enum != null) {
		// use full list of possible enum values
		return schema.enum.length;
	}
	if (schema.minItems != null) {
		// use defined when defined
		return schema.minItems;
	}

	// allow empty array by default
	return 0;
};

const getMaxItems = (schema) => {
	if (schema.maxItems != null) {
		// use defined when defined
		return schema.maxItems;
	}
	if (schema.enum != null) {
		// use full list of possible enum values
		return schema.enum.length;
	}

	// do not restrict otherwise
	return undefined;
};

const ALWAYS_NOT_REQUIRED_PROPERTY_NAMES = ['oneOf', 'anyOf'];
const shouldBePropertyRequired = (name, schema) => {
	if (ALWAYS_NOT_REQUIRED_PROPERTY_NAMES.includes(name)) {
		return false;
	}

	const types = getListOfTypes(schema);
	if (types.includes('array') && types.length === 1) {
		// property can be array and only array
		return (
			// it is possible to use empty array
			schema.minItems == null
			|| schema.minItems === 0
			// the array must have exact length (by the schema) if defined so it should be required
			|| (schema.minItems != null && schema.maxItems != null && schema.minItems >= schema.maxItems)
		);
	}

	return true;
};

const restrictSchema = (schema) => {
	const resultSchema = clone(schema);

	// disable usage of default value to have them explicitly defined
	delete resultSchema.default;

	const types = getListOfTypes(schema);
	if (types.includes('array')) {
		// restrict schema for array items
		if (schema.items != null) {
			resultSchema.items = Array.isArray(schema.items)
				? schema.items.map(restrictSchema)
				: restrictSchema(schema.items);
		}

		// make sure we have min items defined (at least 0)
		resultSchema.minItems = getMinItems(schema);
		// make sure we have max items defined for appropriate cases
		resultSchema.maxItems = getMaxItems(schema);
	}

	if (schema.properties != null) {
		// disable additional properties to prevent extra configuration
		resultSchema.additionalProperties = false;

		// restrict schema for all properties
		const propertyNames = Object.keys(schema.properties);
		for (const propertyName of propertyNames) {
			resultSchema.properties[propertyName] = restrictSchema(schema.properties[propertyName]);
		}

		// make maximum of properties required
		resultSchema.required = propertyNames.filter((propertyName) => {
			// detect by updated/restricted schema
			return shouldBePropertyRequired(propertyName, resultSchema.properties[propertyName]);
		});
	}

	if (Array.isArray(schema.oneOf)) {
		// restrict oneOf possible schemas because exactly one must be valid
		resultSchema.oneOf = schema.oneOf.map(restrictSchema);
	}

	// do NOT restrict anyOf possible schemas because at least one must be valid and it is not easy to make the restriction

	// do NOT restrict allOf possible schemas because all of them must be valid so we would need to make deep merge and it is not a common use case

	return resultSchema;
};

const getValueByPath = (value, path) => {
	const key = path.length > 0 ? path[0] : null;

	return key != null && key !== ''
		? getValueByPath(value[key], path.slice(1))
		: value;
};

const REGEXP_ARRAY_KEY = /\[|\]/uig;
const normalizePathKey = (key) => {
	return key.replace(REGEXP_ARRAY_KEY, '');
};

const processError = (configuration, error) => {
	const path = error.dataPath.split('.').map(normalizePathKey);

	return `\tConfiguration "${JSON.stringify(getValueByPath(configuration, path))}" at "${error.dataPath}" ${error.message}.\n`;
};

const processErrors = (configuration, errors) => {
	throw new Error(errors.map((error) => {
		return processError(configuration, error);
	}).join(''));
};

module.exports = {
	restrictSchema,
	processErrors,
};
