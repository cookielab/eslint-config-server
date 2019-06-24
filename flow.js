module.exports = {
	plugins: [
		'@cookielab.io/custom-rules',
	],
	extends: [
		'./babel.js',
		'./src/flow.js',
	],
	rules: {
		'@cookielab.io/custom-rules/sort-imports': 'error',
	},
};
