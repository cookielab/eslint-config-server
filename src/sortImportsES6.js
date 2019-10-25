module.exports = {
	plugins: [
		'sort-imports-es6-autofix',
	],
	rules: {
		'sort-imports-es6-autofix/sort-imports-es6': ['error', {
			ignoreCase: false,
			ignoreDeclarationSort: false,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
		}],
	},
};
