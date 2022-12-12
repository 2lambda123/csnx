import { useEffect } from 'react';
import { FocusStyleManager } from '@guardian/source-foundations';

export const FocusManagerDecorator = (storyFn: () => any) => {
	useEffect(() => {
		FocusStyleManager.onlyShowFocusOnTabs();
	});

	return <>{storyFn()}</>;
};
