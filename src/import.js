module.exports = {
	plugins: [
		'import',
	],
	overrides: [
		{
			files: [
				'*.test.js',
			],
			rules: {
				'import/no-internal-modules': 'off',
			},
		},
	],
	rules: {
		'import/default': 'error',
		'import/dynamic-import-chunkname': 'off',
		'import/export': 'error',
		'import/exports-last': 'off',
		'import/extensions': ['error', 'never', {json: 'ignorePackages'}],
		'import/first': 'error',
		'import/group-exports': 'off',
		'import/imports-first': 'off', // deprecated, alias for "first"
		'import/max-dependencies': 'off',
		'import/named': 'error',
		'import/namespace': 'error',
		'import/newline-after-import': 'error',
		'import/no-absolute-path': 'error',
		'import/no-amd': 'error',
		'import/no-anonymous-default-export': ['error', {
			allowArray: true,
			allowArrowFunction: false,
			allowAnonymousClass: false,
			allowAnonymousFunction: false,
			allowCallExpression: false,
			allowLiteral: false,
			allowObject: true,
		}],
		'import/no-commonjs': 'error',
		'import/no-cycle': 'error',
		'import/no-default-export': 'off',
		'import/no-deprecated': 'error',
		'import/no-duplicates': 'error',
		'import/no-dynamic-require': 'error',
		'import/no-extraneous-dependencies': ['error', {
			devDependencies: ['**/tests/**/*'], // do not report dev dependencies in tests
			optionalDependencies: true, // do not report optional dependencies
			peerDependencies: true, // do not report peer dependencies
		}],
		'import/no-internal-modules': 'error',
		'import/no-mutable-exports': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-named-default': 'error',
		'import/no-named-export': 'off',
		'import/no-namespace': 'off',
		'import/no-nodejs-modules': 'off',
		'import/no-relative-parent-imports': 'off',
		'import/no-restricted-paths': 'off',
		'import/no-self-import': 'error',
		'import/no-unassigned-import': ['error', {
			allow: ['**/*.css', '*polyfill*'],
		}],
		'import/no-unresolved': 'error',
		'import/no-unused-modules': 'error',
		'import/no-useless-path-segments': ['error', {
			noUselessIndex: true,
		}],
		'import/no-webpack-loader-syntax': 'off',
		'import/order': 'off',
		'import/prefer-default-export': 'off',
		'import/unambiguous': 'off',
	},
};
