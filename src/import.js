module.exports = {
	plugins: [
		'import',
	],
	rules: {
		'import/default': 'error',
		'import/dynamic-import-chunkname': 'off',
		'import/export': 'error',
		'import/exports-last': 'off',
		'import/extensions': ['error', 'never', {json: 'ignorePackages'}],
		'import/first': 'off',
		'import/group-exports': 'off',
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
		'import/no-cycle': 'off',
		'import/no-default-export': 'off',
		'import/no-deprecated': 'off',
		'import/no-duplicates': 'error',
		'import/no-dynamic-require': 'error',
		'import/no-extraneous-dependencies': ['error', {
			devDependencies: ['**/tests/**/*'], // do not report dev dependencies in tests
			optionalDependencies: true, // do not report optional dependencies
			peerDependencies: true, // do not report peer dependencies
		}],
		'import/no-internal-modules': 'off',
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
		'import/no-unassigned-import': 'error',
		'import/no-unresolved': 'error',
		'import/no-useless-path-segments': 'off',
		'import/no-webpack-loader-syntax': 'off',
		'import/order': 'off',
		'import/prefer-default-export': 'off',
		'import/unambiguous': 'off',
	},
};
