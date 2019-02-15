module.exports = {
    extends: [
        './src/index.js',
        './src/typescript.js',
        './src/sortImportsES6.js',
    ],
    settings: {
        'import/resolver': {
            typescript: {},
        },
        'import/parsers': {
            '@typescript-eslint/parser': [
                '.ts',
                '.tsx',
            ],
        },
    },
};
