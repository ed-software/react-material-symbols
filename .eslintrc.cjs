module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	root: true,
	rules: {
		'@typescript-eslint/consistent-type-imports': 'warn',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ destructuredArrayIgnorePattern: '^_', ignoreRestSiblings: true },
		],
	},
};
