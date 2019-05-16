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
        '@typescript-eslint/no-unused-vars': 'error',
    },
};
