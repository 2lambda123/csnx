const rootMain = require('../../../../.storybook/main');
console.log(rootMain);
export const baseMainConfig = {
	...rootMain,

	core: { ...rootMain.core },

	stories: [
		...rootMain.stories,
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [...rootMain.addons],
	webpackFinal: async (config: any, { configType }: any) => {
		// apply any global webpack configs that might have been specified in .storybook/main.js
		if (rootMain.webpackFinal) {
			config = await rootMain.webpackFinal(config, { configType });
		}

		// add your own webpack tweaks if needed

		return config;
	},
};
