module.exports = {
    plugins: [
        '@cookielab.io/custom-rules',
    ],
    extends: [
        './config.js',
        './flow.js',
    ],
    rules: {
        '@cookielab.io/custom-rules/sort-imports': 'error',
    },
};
