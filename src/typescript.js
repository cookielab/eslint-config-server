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
		'@typescript-eslint/ban-ts-comment': ['error', {
			'ts-ignore': false,
			'ts-nocheck': true,
			'ts-check': false,
		}],
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
		'camelcase': 'off',
		'@typescript-eslint/camelcase': ['error', {
			properties: 'never',
			ignoreDestructuring: false,
			ignoreImports: false,
			allow: [],
			genericType: 'never',
		}],
		'@typescript-eslint/class-name-casing': ['error', {
			allowUnderscorePrefix: false,
		}],
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': ['error', {
			before: false,
			after: true,
		}],
		'@typescript-eslint/consistent-type-assertions': ['error', {
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'never',
		}],
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/default-param-last': 'error',
		'@typescript-eslint/explicit-function-return-type': ['error', {
			allowExpressions: true,
			allowTypedFunctionExpressions: true,
			allowHigherOrderFunctions: true,
			allowDirectConstAssertionInArrowFunctions: true,
		}],
		'@typescript-eslint/explicit-member-accessibility': ['error', {
			accessibility: 'explicit',
			overrides: {
				accessors: 'explicit',
				constructors: 'explicit',
				methods: 'explicit',
				properties: 'explicit',
				parameterProperties: 'explicit',
			},
			ignoredMethodNames: [],
		}],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'func-call-spacing': 'off', // Disable base rule to avoid errors
		'@typescript-eslint/func-call-spacing': ['error', 'never'],
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
		'@typescript-eslint/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'semi',
				requireLast: true,
			},
			singleline: {
				delimiter: 'semi',
				requireLast: false,
			},
			overrides: {
				interface: {
					multiline: {
						delimiter: 'semi',
						requireLast: true,
					},
					singleline: {
						delimiter: 'semi',
						requireLast: false,
					},
				},
				typeLiteral: {
					multiline: {
						delimiter: 'comma',
						requireLast: true,
					},
					singleline: {
						delimiter: 'comma',
						requireLast: false,
					},
				},
			},
		}],
		'@typescript-eslint/member-naming': 'off',
		'@typescript-eslint/member-ordering': ['error', {
			default: [
				'signature',
				'public-static-field',
				'protected-static-field',
				'private-static-field',
				'public-instance-field',
				'protected-instance-field',
				'private-instance-field',
				'public-abstract-field',
				'protected-abstract-field',
				'private-abstract-field',
				'public-field',
				'protected-field',
				'private-field',
				'static-field',
				'instance-field',
				'abstract-field',
				'field',
				'constructor',
				'public-static-method',
				'protected-static-method',
				'private-static-method',
				'public-instance-method',
				'protected-instance-method',
				'private-instance-method',
				'public-abstract-method',
				'protected-abstract-method',
				'private-abstract-method',
				'public-method',
				'protected-method',
				'private-method',
				'static-method',
				'instance-method',
				'abstract-method',
				'method',
			],
			classes: [
				'signature',
				'public-static-field',
				'protected-static-field',
				'private-static-field',
				'public-instance-field',
				'protected-instance-field',
				'private-instance-field',
				'public-abstract-field',
				'protected-abstract-field',
				'private-abstract-field',
				'public-field',
				'protected-field',
				'private-field',
				'static-field',
				'instance-field',
				'abstract-field',
				'field',
				'constructor',
				'public-static-method',
				'protected-static-method',
				'private-static-method',
				'public-instance-method',
				'protected-instance-method',
				'private-instance-method',
				'public-abstract-method',
				'protected-abstract-method',
				'private-abstract-method',
				'public-method',
				'protected-method',
				'private-method',
				'static-method',
				'instance-method',
				'abstract-method',
				'method',
			],
			classExpressions: [
				'signature',
				'public-static-field',
				'protected-static-field',
				'private-static-field',
				'public-instance-field',
				'protected-instance-field',
				'private-instance-field',
				'public-abstract-field',
				'protected-abstract-field',
				'private-abstract-field',
				'public-field',
				'protected-field',
				'private-field',
				'static-field',
				'instance-field',
				'abstract-field',
				'field',
				'constructor',
				'public-static-method',
				'protected-static-method',
				'private-static-method',
				'public-instance-method',
				'protected-instance-method',
				'private-instance-method',
				'public-abstract-method',
				'protected-abstract-method',
				'private-abstract-method',
				'public-method',
				'protected-method',
				'private-method',
				'static-method',
				'instance-method',
				'abstract-method',
				'method',
			],
			interfaces: ['signature', 'field', 'constructor', 'method'],
			typeLiterals: ['signature', 'field', 'constructor', 'method'],
		}],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase'],
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE'],
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'variable',
				format: ['camelCase'],
				types: ['function'],
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'enumMember',
				format: ['UPPER_CASE'],
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
			},
		],
		'@typescript-eslint/no-array-constructor': 'error',
		'no-no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': ['error', {
			allow: [
				'private-constructors',
				'protected-constructors',
			],
		}],
		'@typescript-eslint/no-empty-interface': ['error', {
			allowSingleExtends: true,
		}],
		'@typescript-eslint/no-explicit-any': ['error', {
			fixToUnknown: true,
			ignoreRestArgs: false,
		}],
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extra-parens': 'off',
		'no-extra-semi': 'off',
		'@typescript-eslint/no-extra-semi': 'error',
		'@typescript-eslint/no-extraneous-class': ['error', {
			allowConstructorOnly: false,
			allowEmpty: false,
			allowStaticOnly: false,
			allowWithDecorator: false,
		}],
		'@typescript-eslint/no-floating-promises': ['error', {
			ignoreVoid: false,
		}],
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-implied-eval': 'error',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-magic-numbers': 'off',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-misused-promises': ['error', {
			checksConditionals: true,
			checksVoidReturn: true,
		}],
		'@typescript-eslint/no-namespace': ['error', {
			allowDeclarations: false,
			allowDefinitionFiles: true,
		}],
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-throw-literal': 'error',
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
		'@typescript-eslint/no-this-alias': ['error', {
			allowDestructuring: true,
			allowedNames: [],
		}],
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unnecessary-condition': ['error', {
			ignoreRhs: false,
			allowConstantLoopConditions: false,
			checkArrayPredicates: true,
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
		'@typescript-eslint/no-unnecessary-type-assertion': ['error', {
			typesToIgnore: [],
		}],
		'@typescript-eslint/no-untyped-public-signature': ['error', {
			ignoredMethods: [],
		}],
		'@typescript-eslint/no-use-before-define': ['error', {
			functions: true,
			classes: true,
			enums: true,
			variables: true,
			typedefs: true,
		}], // need to be tested with eslint no-use-before-define
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'off',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': ['error', {
			ignoreConditionalTests: true,
			ignoreMixedLogicalExpressions: true,
			forceSuggestionFixer: true,
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
		'@typescript-eslint/restrict-plus-operands': ['error', {
			checkCompoundAssignments: false,
		}],
		'@typescript-eslint/restrict-template-expressions': ['error', {
			allowNumber: true,
			allowBoolean: false,
			allowNullable: false,
		}],
		'@typescript-eslint/return-await': ['error', 'always'],
		'semi': 'off', // Disable base rule to avoid errors
		'@typescript-eslint/semi': ['error', 'always', {
			omitLastInOneLineBlock: false,
		}],
		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		}],
		'@typescript-eslint/strict-boolean-expressions': ['error', {
			allowNullable: false,
			allowSafe: false,
			ignoreRhs: false,
		}],
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/triple-slash-reference': ['error', {
			path: 'never',
			types: 'never',
			lib: 'never',
		}],
		'@typescript-eslint/type-annotation-spacing': ['error', {
			before: false,
			after: true,
			overrides: {
				colon: {
					before: false,
					after: true,
				},
				arrow: {
					before: true,
					after: true,
				},
			},
		}],
		'@typescript-eslint/typedef': ['error', {
			arrayDestructuring: false,
			arrowParameter: true,
			memberVariableDeclaration: true,
			objectDestructuring: false,
			parameter: true,
			propertyDeclaration: true,
			variableDeclaration: false,
		}],
		'@typescript-eslint/unbound-method': ['error', {
			ignoreStatic: false,
		}],
		'@typescript-eslint/unified-signatures': 'error',
	},
};
