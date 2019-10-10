const localConfig = require('../src/typescript');
const plugin = require('@typescript-eslint/eslint-plugin');

describe('Rules Configurations', () => {
	describe('typescript', () => {
		const localRules = Object.keys(localConfig.rules);
		const pluginRules = Object.keys(plugin.rules).map((ruleName) => `@typescript-eslint/${ruleName}`);
		const overridenRuleNames = [
			'brace-style',
			'func-call-spacing',
			'indent',
			'no-duplicate-imports',
			'no-empty-function',
			'quotes',
			'require-await',
			'semi',
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
	});
});
