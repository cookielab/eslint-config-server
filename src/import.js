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
		'import/exports-last': 'error',
		'import/extensions': ['error', 'never', {json: 'ignorePackages'}],
		'import/first': 'error',
		'import/group-exports': 'error',
		'import/imports-first': 'off', // deprecated, alias for "first"
		'import/max-dependencies': 'off',
		'import/named': 'error',
		'import/namespace': ['error', {
			allowComputed: false,
		}],
		'import/newline-after-import': ['error', {
			count: 1,
		}],
		'import/no-absolute-path': ['error', {
			esmodule: true,
			commonjs: true,
			amd: false,
			ignore: ['a^'],
		}],
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
		'import/no-commonjs': ['error', {
			allowRequire: false,
			allowPrimitiveModules: false,
			allowConditionalRequire: true,
		}],
		'import/no-cycle': ['error', {
			maxDepth: Infinity,
			esmodule: true,
			commonjs: false,
			amd: false,
			ignore: ['a^'],
		}],
		'import/no-default-export': 'off',
		'import/no-deprecated': 'error',
		'import/no-duplicates': ['error', {
			considerQueryString: false,
		}],
		'import/no-dynamic-require': 'error',
		'import/no-extraneous-dependencies': ['error', {
			devDependencies: ['**/tests/**/*'], // do not report dev dependencies in tests
			optionalDependencies: true, // do not report optional dependencies
			peerDependencies: true, // do not report peer dependencies
			bundledDependencies: false, // do report bundled dependencies
			packageDir: [],
		}],

		/*
		 * Turned off because it handles internal modules of the package itself (in terms of using files in sub-folders)
		 * without an option to disable internal modules of external packages only so using relative directories in
		 * the code is not possible.
		 */
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
		'import/no-unassigned-import': ['error', {
			allow: ['**/*.css', '*polyfill*'],
			devDependencies: [], // in schema, but not in code
			optionalDependencies: [], // in schema, but not in code
			peerDependencies: [], // in schema, but not in code
		}],
		'import/no-unresolved': ['error', {
			caseSensitive: true,
			esmodule: true,
			commonjs: false,
			amd: false,
			ignore: ['a^'],
		}],
		'import/no-unused-modules': ['error', {
			missingExports: false,
			unusedExports: true,
			src: undefined,
			ignoreExports: undefined,
		}],
		'import/no-useless-path-segments': ['error', {
			noUselessIndex: true,
			commonjs: false,

			/*
			 * esmodule: true, // in code, but not in schema
			 * amd: false, // in code, but not in schema
			 * ignore: ['a^'], // in code, but not in schema
			 */
		}],
		'import/no-webpack-loader-syntax': 'off',
		'import/order': 'off',
		'import/prefer-default-export': 'off',
		'import/unambiguous': 'off',
	},
};
