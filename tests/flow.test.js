const Ajv = require('ajv');
const localConfig = require('../src/flow');
const plugin = require('eslint-plugin-flowtype');

const ajv = new Ajv({
	allErrors: true,
	useDefaults: true,
});

describe('Rules Configurations', () => {
	describe('flow', () => {
		const localRules = Object.keys(localConfig.rules);
		const pluginRules = Object.keys(plugin.rules).map((ruleName) => `flowtype/${ruleName}`);
		const overridenRuleNames = [
			'no-duplicate-imports',
			'import/exports-last',
			'import/group-exports',
			'import/no-cycle',
		];

		it('has configuration for all supported rules', () => {
			const notConfiguredPluginRules = pluginRules.filter((ruleName) => !localRules.includes(ruleName));

			expect(notConfiguredPluginRules).toEqual([]);
		});

		it('does not have configuration for not existing rules', () => {
			const extraLocalRules = localRules
				.filter((ruleName) => !pluginRules.includes(ruleName))
				.filter((ruleName) => !overridenRuleNames.includes(ruleName));

			expect(extraLocalRules).toEqual([]);
		});

		const resolvedRules = plugin.rules;
		for (const ruleName of Object.keys(resolvedRules)) {
			const rule = resolvedRules[ruleName];
			if (rule.meta != null && rule.meta.schema != null && Array.isArray(rule.meta.schema) && rule.meta.schema.length > 0) {
				it(`rule "${ruleName}" has valid configuration`, async () => {
					const schemas = rule.meta.schema;
					const localRule = localConfig.rules[ruleName];
					if (Array.isArray(localRule) && localRule.length > 1) {
						const configurations = localRule.slice(1);
						for (let index = 0; index < configurations.length; index++) {
							const schema = schemas[index];
							const configuration = configurations[index];
							await ajv.validate(schema, configuration);
						}
					}
				});
			}
		}
	});
});
