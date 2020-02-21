module.exports = {
	env: {
		es6: true,
		node: true,
		jasmine: true,
		jest: true,
	},
	extends: [
		'./src/native.js',
		'./src/filenames.js',
		'./src/import.js',
		'./src/typescript.js',
	],
	settings: {
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
		'import/resolver': {
			typescript: {},
		},
		'import/parsers': {
			'@typescript-eslint/parser': [
				'.ts',
				'.tsx',
				'.d.ts',
			],
		},
	},
};
