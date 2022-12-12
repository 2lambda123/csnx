import { ThemeProvider } from '@emotion/react';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

export const ThemeProviderDecorator = (
	storyFn: () =>
		| boolean
		| ReactChild
		| ReactFragment
		| ReactPortal
		| null
		| undefined,
	context: { parameters: { theme: any } },
) => {
	const theme = context.parameters.theme;
	return theme ? (
		<ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
	) : (
		<>{storyFn()}</>
	);
};
