module.exports = {
    extends: [
        './src/index.js',
        './src/typescript.js',
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
