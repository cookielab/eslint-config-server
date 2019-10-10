const localConfig = require('../src/filenames');
const plugin = require('eslint-plugin-filenames');

describe('Rules Configurations', () => {
	describe('filenames', () => {
		const localRules = Object.keys(localConfig.rules);
		const pluginRules = Object.keys(plugin.rules).map((ruleName) => `filenames/${ruleName}`);

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
