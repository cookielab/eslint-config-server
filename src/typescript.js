module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'no-duplicate-imports': 'error',
        '@typescript-eslint/adjacent-overload-signatures': true,
        '@typescript-eslint/array-type': ['error', 'array-simple'],
        '@typescript-eslint/await-promise': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-types': ['error', {
            'types': {
                'String': {
                    'message': 'Use string instead',
                    'fixWith': 'string',
                },
                'Object': {
                    'message': 'Use object instead',
                    'fixWith': 'object',
                },
                'Number': {
                    'message': 'Use number instead',
                    'fixWith': 'number',
                },
                'Boolean': {
                    'message': 'Use boolean instead',
                    'fixWith': 'boolean',
                },
                'Array': {
                    'message': 'Use Array<any> instead',
                },
            },
        }],
        '@typescript-eslint/camelcase': 'off', // Used in general eslint rules,
        '@typescript-eslint/class-name-casing': ['error'],
        '@typescript-eslint/explicit-function-return-type': ['error', {allowExpressions: true}],
        '@typescript-eslint/explicit-member-accessibility': ['error'],
        'func-call-spacing': 'off', // Disable base rule to avoid errors
        '@typescript-eslint/func-call-spacing': ['error'],
        '@typescript-eslint/generic-type-naming': 'off',
        'indent': 'off', // Disable base rule to avoid errors
        '@typescript-eslint/indent': ['error', 'tab', {
            SwitchCase: 1,
            MemberExpression: 1,
        }],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/member-naming': 'off',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
    },
};
