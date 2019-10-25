module.exports = {
	plugins: [
		'filenames',
	],
	rules: {
		'filenames/match-exported': ['error', ['camel', 'pascal']],
		'filenames/match-regex': ['error', '^[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+)*$'],
		'filenames/no-index': 'off',
	},
};
