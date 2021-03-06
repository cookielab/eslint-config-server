const Ajv = require('ajv');
const {validateRuleOptions, getRuleOptionsSchema} = require('eslint/lib/shared/config-validator');
const clone = require('clone');
const localConfig = require('../src/typescript');
const plugin = require('@typescript-eslint/eslint-plugin');
const {restrictSchema, processErrors} = require('./schema');

const ajv = new Ajv({
	allErrors: true,
	useDefaults: true,
});

describe('Rules Configurations', () => {
	describe('typescript', () => {
		const localRules = Object.keys(localConfig.rules);
		const pluginRules = Object.keys(plugin.rules).map((ruleName) => `@typescript-eslint/${ruleName}`);
		const overridenRuleNames = [
			'brace-style',
			'comma-spacing',
			'camelcase',
			'func-call-spacing',
			'indent',
			'no-no-dupe-class-members',
			'no-empty-function',
			'no-extra-semi',
			'no-unused-expressions',
			'no-unused-vars',
			'quotes',
			'require-await',
			'semi',
			'space-before-function-paren',
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
		for (const [ruleName, rule] of Object.entries(resolvedRules)) {
			describe(`rule "${ruleName}"`, () => {
				const localRule = localConfig.rules[`@typescript-eslint/${ruleName}`];

				it('has valid configuration', () => {
					validateRuleOptions(rule, ruleName, clone(localRule));
				});

				const status = Array.isArray(localRule) ? localRule[0] : localRule;
				const schema = getRuleOptionsSchema(rule);
				const configuration = Array.isArray(localRule) ? localRule.slice(1) : [];
				if (
					status !== 'off' && schema != null
					&& ruleName !== 'naming-convention' // do not check exhaustiveness for rule with too generic options
				) {
					it('has exhaustive configuration', () => {
						const strictSchema = restrictSchema(schema);
						const valid = ajv.validate(strictSchema, configuration);
						if (!valid) {
							processErrors(configuration, ajv.errors);
						}
					});
				} else if (configuration.length > 0) {
					// eslint-disable-next-line no-empty-function
					it.skip(`rule "@typescript-eslint/${ruleName}" has configuration but does not have schema => check the documentation and the code of the rule and update configuration or send a pull request adding the schema to the rule`, () => {});
				}
			});
		}
	});
});
