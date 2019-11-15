module.exports = {
	plugins: [
		'flowtype',
	],
	rules: {
		'no-duplicate-imports': 'off', // to support separate imports of types
		'import/exports-last': 'off', // to support exporting types anywhere
		'import/group-exports': 'off', // to support exporting types anywhere
		'import/no-cycle': 'off', // to support importing types
		'flowtype/array-style-complex-type': 'off',
		'flowtype/array-style-simple-type': 'off',
		'flowtype/arrow-parens': ['error', 'always'],
		'flowtype/boolean-style': ['error', 'boolean'],
		'flowtype/define-flow-type': 'warn',
		'flowtype/delimiter-dangle': ['error', 'only-multiline'],
		'flowtype/generic-spacing': ['error', 'never'],
		'flowtype/newline-after-flow-annotation': 'off',
		'flowtype/no-dupe-keys': 'error',
		'flowtype/no-existential-type': 'off',
		'flowtype/no-flow-fix-me-comments': 'off',
		'flowtype/no-mixed': 'off',
		'flowtype/no-mutable-array': 'off',
		'flowtype/no-primitive-constructor-types': 'off',
		'flowtype/no-types-missing-file-annotation': 'error',
		'flowtype/no-unused-expressions': 'off',
		'flowtype/no-weak-types': 'error',
		'flowtype/object-type-delimiter': ['error', 'comma'],
		'flowtype/require-compound-type-alias': 'off',
		'flowtype/require-exact-type': 'off',
		'flowtype/require-indexer-name': 'off',
		'flowtype/require-inexact-type': 'off',
		'flowtype/require-parameter-type': ['error', {
			excludeArrowFunctions: 'expressionsOnly',
			excludeParameterMatch: 'a^',
		}],
		'flowtype/require-readonly-react-props': 'error',
		'flowtype/require-return-type': ['error', 'always', {
			excludeArrowFunctions: 'expressionsOnly',
			annotateUndefined: 'always',
		}],
		'flowtype/require-types-at-top': 'off',
		'flowtype/require-valid-file-annotation': ['error', 'always', {
			annotationStyle: 'line',
			strict: false,
		}],
		'flowtype/require-variable-type': 'off',
		'flowtype/semi': ['error', 'always'],
		'flowtype/sort-keys': 'off',
		'flowtype/space-after-type-colon': ['error', 'always'],
		'flowtype/space-before-generic-bracket': ['error', 'never'],
		'flowtype/space-before-type-colon': ['error', 'never'],
		'flowtype/spread-exact-type': 'error',
		'flowtype/type-id-match': 'off',
		'flowtype/type-import-style': 'off',
		'flowtype/union-intersection-spacing': ['error', 'always'],
		'flowtype/use-flow-type': 'warn',
		'flowtype/valid-syntax': 'warn',
	},
	settings: {
		flowtype: {
			onlyFilesWithFlowAnnotation: true,
		},
	},
};
