const Ajv = require('ajv');
const {validateRuleOptions, getRuleOptionsSchema} = require('eslint/lib/shared/config-validator');
const localConfig = require('../src/native');
const eslintAll = require('eslint/conf/eslint-all');
const rules = require('eslint/lib/rules');
const {restrictSchema, processErrors} = require('./schema');

const ajv = new Ajv({
	allErrors: true,
	useDefaults: true,
});

describe('Rules Configurations', () => {
	describe('native', () => {
		const localRules = Object.keys(localConfig.rules);
		const pluginRules = Object.keys(eslintAll.rules);

		it('has configuration for all supported rules', () => {
			const notConfiguredPluginRules = pluginRules.filter((ruleName) => !localRules.includes(ruleName));

			expect(notConfiguredPluginRules).toEqual([]);
		});

		it('does not have configuration for not existing rules', () => {
			const extraLocalRules = localRules.filter((ruleName) => !pluginRules.includes(ruleName));

			expect(extraLocalRules).toEqual([]);
		});

		const resolvedRules = rules.entries();
		for (const [ruleName, rule] of resolvedRules) {
			if (!pluginRules.includes(ruleName)) {
				// Rule object for rule name that should not be configured already
				continue;
			}

			describe(`rule "${ruleName}"`, () => {
				const localRule = localConfig.rules[ruleName];

				it('has valid configuration', () => {
					validateRuleOptions(rule, ruleName, localRule);
				});

				const status = Array.isArray(localRule) ? localRule[0] : localRule;
				const schema = getRuleOptionsSchema(rule);
				const configuration = Array.isArray(localRule) ? localRule.slice(1) : [];
				if (status !== 'off' && schema != null) {
					it('has exhaustive configuration', () => {
						const strictSchema = restrictSchema(schema);
						const valid = ajv.validate(strictSchema, configuration);
						if (!valid) {
							processErrors(configuration, ajv.errors);
						}
					});
				} else if (configuration.length > 0) {
					it.skip(`rule "${ruleName}" has configuration but does not have schema => check the documentation and the code of the rule and update configuration or send a pull request adding the schema to the rule`, () => {});
				}
			});
		}
	});
});
