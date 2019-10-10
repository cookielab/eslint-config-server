const localConfig = require('../src/sortImportsES6');
const plugin = require('eslint-plugin-sort-imports-es6-autofix');

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
	});
});
