module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
	],
	overrides: [
		{
			files: [
				'*.test.ts',
			],
			rules: {
				'@typescript-eslint/unbound-method': 'off',
			},
		},
	],
	rules: {
		'import/exports-last': 'off', // to support exporting types/interfaces anywhere
		'import/group-exports': 'off', // to support exporting types/interfaces anywhere
		'import/no-cycle': 'off', // to support importing types/interfaces
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': ['error', {
			default: 'array-simple',
			readonly: 'array-simple',
		}],
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/ban-types': ['error', {
			types: {
				String: {
					message: 'Use string instead',
					fixWith: 'string',
				},
				Object: {
					message: 'Use object instead',
					fixWith: 'object',
				},
				Number: {
					message: 'Use number instead',
					fixWith: 'number',
				},
				Boolean: {
					message: 'Use boolean instead',
					fixWith: 'boolean',
				},

				/*
				 * The rule for Array is not fully supported yet https://github.com/typescript-eslint/typescript-eslint/commit/c14ade74a61007fa48af9ae4a5535b426080e64d
				 * Array: {
				 * 	message: 'Use Array<any> instead',
				 * },
				 */
			},
		}],
		'brace-style': 'off',
		'@typescript-eslint/brace-style': ['error', '1tbs', {
			allowSingleLine: false,
		}],
		'@typescript-eslint/camelcase': 'off', // Used in general eslint rules,
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/consistent-type-assertions': ['error', {
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'never',
		}],
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/explicit-function-return-type': ['error', {
			allowExpressions: true,
			allowTypedFunctionExpressions: true,
			allowHigherOrderFunctions: true,
			allowDirectConstAssertionInArrowFunctions: true,
		}],
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'func-call-spacing': 'off', // Disable base rule to avoid errors
		'@typescript-eslint/func-call-spacing': 'error',
		'@typescript-eslint/generic-type-naming': 'off',
		'indent': 'off', // Disable base rule to avoid errors
		'@typescript-eslint/indent': ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			MemberExpression: 1,
			FunctionDeclaration: {
				parameters: 1,
				body: 1,
			},
			FunctionExpression: {
				parameters: 1,
				body: 1,
			},
			CallExpression: {
				arguments: 1,
			},
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			ignoredNodes: [],
			ignoreComments: false,
		}],
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/member-naming': 'off',
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-empty-interface': ['error', {
			allowSingleExtends: true,
		}],
		'@typescript-eslint/no-explicit-any': ['error', {
			fixToUnknown: true,
			ignoreRestArgs: false,
		}],
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extra-parens': 'off',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-floating-promises': ['error', {
			ignoreVoid: false,
		}],
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-magic-numbers': 'off',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-misused-promises': ['error', {
			checksConditionals: true,
			checksVoidReturn: true,
		}],
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-parameter-properties': 'off',
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': ['error', {
			allowShortCircuit: false,
			allowTernary: false,
			allowTaggedTemplates: false,
		}],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error', {
			vars: 'all',
			varsIgnorePattern: 'a^',
			args: 'after-used',
			ignoreRestSiblings: false,
			argsIgnorePattern: 'a^',
			caughtErrors: 'none',
			caughtErrorsIgnorePattern: 'a^',
		}],
		'@typescript-eslint/no-unused-vars-experimental': 'off',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/no-unnecessary-condition': ['error', {
			ignoreRhs: false,
			allowConstantLoopConditions: false,
		}],
		'@typescript-eslint/no-type-alias': ['error', {
			allowAliases: 'in-unions-and-intersections',
			allowCallbacks: 'always',
			allowConditionalTypes: 'always',
			allowConstructors: 'never',
			allowLiterals: 'always',
			allowMappedTypes: 'always',
			allowTupleTypes: 'always',
		}],
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-untyped-public-signature': ['error', {
			ignoredMethods: [],
		}],
		'@typescript-eslint/no-use-before-define': 'error', // need to be tested with eslint no-use-before-define
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'off',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': ['error', {
			ignoreConditionalTests: true,
			ignoreMixedLogicalExpressions: true,
		}],
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': ['error', {
			onlyInlineLambdas: false,
		}],
		'@typescript-eslint/prefer-regexp-exec': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/promise-function-async': 'off',
		'quotes': 'off',
		'@typescript-eslint/quotes': ['error', 'single', {
			avoidEscape: true,
			allowTemplateLiterals: true,
		}],
		'@typescript-eslint/require-array-sort-compare': 'off',
		'require-await': 'off',
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/restrict-template-expressions': ['error', {
			allowNumber: true,
			allowBoolean: false,
			allowNullable: false,
		}],
		'@typescript-eslint/return-await': ['error', 'always'],
		'semi': 'off', // Disable base rule to avoid errors
		'@typescript-eslint/semi': 'error',
		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		}],
		'@typescript-eslint/strict-boolean-expressions': ['error', {
			allowNullable: false,
			ignoreRhs: false,
		}],
		'@typescript-eslint/triple-slash-reference': ['error', {
			path: 'never',
			types: 'never',
			lib: 'never',
		}],
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/typedef': ['error', {
			arrayDestructuring: false,
			arrowParameter: true,
			memberVariableDeclaration: true,
			objectDestructuring: false,
			parameter: true,
			propertyDeclaration: true,
			variableDeclaration: false,
		}],
		'@typescript-eslint/unbound-method': 'error',
		'@typescript-eslint/unified-signatures': 'error',
	},
};
