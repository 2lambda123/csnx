import './styles.css';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { HTMLAttributes } from 'react';
import type { Props } from '../@types/Props';

export interface ContainerProps extends HTMLAttributes<HTMLElement>, Props {
	/**
	 * **Deprecated**
	 *
	 * Use `sideBorders` instead.
	 *
	 * @deprecated Use `sideBorders` instead.
	 */
	border?: boolean;
	/**
	 * Add borders to the sides of the component
	 */
	sideBorders?: boolean;
	/**
	 * Add a border to the top of the component
	 */
	topBorder?: boolean;
	/**
	 * Set a background colour on the component
	 */
	backgroundColor?: string;
	/**
	 * Set the colour of any borders
	 */
	borderColor?: string;
	/**
	 * The element type to use.
	 */
	element?:
		| 'div'
		| 'article'
		| 'aside'
		| 'footer'
		| 'header'
		| 'nav'
		| 'section';
}

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/story/source-react-components_container--default) •
 * [Design System](https://theguardian.design/2a1e5182b/p/440a83-container) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components/src/container/Container.tsx) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components)
 *
 * Centres the page content and applies a width that corresponds to the grid at the current breakpoint.
 */
export const Container = ({
	element: Element = 'section',
	border = false,
	sideBorders = false,
	topBorder = false,
	backgroundColor,
	borderColor,
	children,
	...props
}: ContainerProps): EmotionJSX.Element => {
	const classes = [
		'c-source-container',
		(sideBorders || border) && 'c-source-container--side-borders',
		topBorder && 'c-source-container--top-border',
	]
		.filter(Boolean)
		.join(' ');

	const styles = {
		'--source-container-border-color': borderColor,
		'--source-container-background-color': backgroundColor,
	} as React.CSSProperties;

	return (
		/* TODO: How to handle overrides? */
		<Element {...props}>
			<div className={classes} style={styles}>
				{children}
			</div>
		</Element>
	);
};
