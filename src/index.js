module.exports = {
    env: {
        es6: true,
        node: true,
        jasmine: true,
        jest: true,
    },
    extends: [
        './native.js',
        './filenames.js',
        './import.js',
    ],
};
