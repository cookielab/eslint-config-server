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
        '@typescript-eslint/no-unused-vars': 'error',
    },
};
