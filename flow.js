module.exports = {
    plugins: [
        '@cookielab.io/custom-rules',
    ],
    extends: [
        './src/index.js',
        './src/flow.js',
    ],
    rules: {
        '@cookielab.io/custom-rules/sort-imports': 'error',
    },
};
