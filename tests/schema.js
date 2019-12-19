const restrictSchema = (schema) => {
	const types = Array.isArray(schema.type)
		? schema.type
		: [schema.type];
	if (types.includes('array')) {
		if (schema.items != null) {
			schema.items = Array.isArray(schema.items)
				? schema.items.map(restrictSchema)
				: restrictSchema(schema.items);
		}

		if (schema.maxItems != null && schema.maxItems > 0) {
			schema.minItems = schema.maxItems;
		} else if (Array.isArray(schema.items) && schema.minItems == null) {
			schema.minItems = schema.items.length;
		}
	} else if (schema.properties != null) {
		schema.additionalProperties = false;
		const propertyNames = Object.keys(schema.properties);
		for (const propertyName of propertyNames) {
			schema.properties[propertyName] = restrictSchema(schema.properties[propertyName]);
		}
		schema.required = propertyNames.filter((propertyName) => {
			if (['oneOf', 'anyOf'].includes(propertyName)) {
				return false;
			}

			const property = schema.properties[propertyName];
			const types = Array.isArray(property.type)
				? property.type
				: [property.type];
			if (types.includes('array') && types.length === 1) {
				return (
					(property.minItems != null && property.maxItems != null && property.minItems === property.maxItems) // the array must have exact length
					|| property.minItems == null // It is possible to use empty array
				);
			}

			return true;
		});
	} else if (Array.isArray(schema.oneOf)) {
		schema.oneOf = schema.oneOf.map(restrictSchema);
	} else if (Array.isArray(schema.anyOf)) {
		schema.anyOf = schema.anyOf.map(restrictSchema);
	}

	delete schema.default;

	return schema;
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
