module.exports = {
	plugins: [
		'filenames',
	],
	rules: {
		'filenames/match-exported': ['error', ['camel', 'pascal'], null, null],
		'filenames/match-regex': ['error', '^[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+)*$', false],
		'filenames/no-index': 'off',
	},
};
