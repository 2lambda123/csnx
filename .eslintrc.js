module.exports = {
	root: true,
	// disable eslint on all files by default, for perf reasons
	// re-enabled in each projects own eslint config (ignorePatterns: ['!**/*'])
	ignorePatterns: ['**/*'],
	plugins: ['@nrwl/nx'],
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			rules: {
				'@nrwl/nx/enforce-module-boundaries': [
					'error',
					{
						enforceBuildableLibDependency: true,
						allow: [],
						depConstraints: [
							{
								sourceTag: '*',
								onlyDependOnLibsWithTags: ['*'],
							},
						],
					},
				],
			},
		},
		{
			files: ['*.js', '*.jsx'],
			extends: ['plugin:@nrwl/nx/javascript', '@guardian/eslint-config'],
		},
		{
			files: ['*.ts', '*.tsx'],
			extends: [
				'plugin:@nrwl/nx/typescript',
				'@guardian/eslint-config-typescript',
			],
		},
	],
};