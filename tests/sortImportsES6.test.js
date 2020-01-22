const Ajv = require('ajv');
const {validateRuleOptions, getRuleOptionsSchema} = require('eslint/lib/shared/config-validator');
const clone = require('clone');
const localConfig = require('../src/sortImportsES6');
const plugin = require('eslint-plugin-sort-imports-es6-autofix');
const {restrictSchema, processErrors} = require('./schema');

const ajv = new Ajv({
	allErrors: true,
	useDefaults: true,
});

describe('Rules Configurations', () => {
	describe('sort imports', () => {
		const localRules = Object.keys(localConfig.rules);
		const pluginRules = Object.keys(plugin.rules).map((ruleName) => `sort-imports-es6-autofix/${ruleName}`);

		it('has configuration for all supported rules', () => {
			const notConfiguredPluginRules = pluginRules.filter((ruleName) => !localRules.includes(ruleName));

			expect(notConfiguredPluginRules).toEqual([]);
		});

		it('does not have configuration for not existing rules', () => {
			const extraLocalRules = localRules.filter((ruleName) => !pluginRules.includes(ruleName));

			expect(extraLocalRules).toEqual([]);
		});

		const resolvedRules = plugin.rules;
		for (const [ruleName, rule] of Object.entries(resolvedRules)) {
			describe(`rule "${ruleName}"`, () => {
				const localRule = localConfig.rules[`sort-imports-es6-autofix/${ruleName}`];

				it('has valid configuration', () => {
					validateRuleOptions(rule, ruleName, clone(localRule));
				});

				const status = Array.isArray(localRule) ? localRule[0] : localRule;
				const schema = getRuleOptionsSchema(rule);
				const configuration = Array.isArray(localRule) ? localRule.slice(1) : [];
				if (status !== 'off' && schema != null) {
					it('has exhaustive configuration', () => {
						const strictSchema = restrictSchema(schema);
						const valid = ajv.validate(strictSchema, configuration);
						if (!valid) {
							processErrors(configuration, ajv.errors);
						}
					});
				} else if (configuration.length > 0) {
					// eslint-disable-next-line no-empty-function
					it.skip(`rule "sort-imports-es6-autofix/${ruleName}" has configuration but does not have schema => check the documentation and the code of the rule and update configuration or send a pull request adding the schema to the rule`, () => {});
				}
			});
		}
	});
});
