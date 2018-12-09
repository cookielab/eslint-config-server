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
            'eslint-plugin-typescript/parser': [
                '.ts',
                '.tsx',
            ],
        },
    },
};
