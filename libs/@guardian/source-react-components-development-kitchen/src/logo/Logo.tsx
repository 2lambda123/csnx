import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import {
	brandAlt,
	brandText,
	from,
	visuallyHidden,
} from '@guardian/source-foundations';
import { SvgGuardianLogo } from '@guardian/source-react-components';
import type { Props } from '@guardian/source-react-components';

type LogoType = 'standard' | 'anniversary' | 'bestWebsite';

export interface LogoProps extends Props {
	/**
	 * The type of logo to return
	 */
	logoType?: LogoType;
}

const svgSize = css`
	width: 146px;
	height: auto;
	${from.mobileMedium} {
		width: 195px;
	}
	${from.tablet} {
		width: 224px;
	}
	${from.desktop} {
		width: 295px;
	}
`;

const svgColour = css`
	svg {
		fill: ${brandText.primary};
	}
`;

const StandardLogo = () => {
	return (
		<div css={[svgSize, svgColour]}>
			<SvgGuardianLogo />
		</div>
	);
};

const BestWebsiteLogo = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 300 116"
			css={svgSize}
			aria-labelledby="BestWebsiteLogoTitle"
		>
			<title id="BestWebsiteLogoTitle">
				The Guardian. For 200 years. News website of the year.
			</title>
			<g fill={brandText.primary}>
				<path
					data-content="The Guardian"
					d="m68.1 51.6 5.2-2.7V8.5h-4L60 21.1h-1.1l.6-14h41.3l.6 14H100L90.8 8.5h-4v40.3l5.2 2.7V53H68.1v-1.3zm37.3-1.8V5l-4-1.6v-.8L115.9 0h1.5v21.2l.4-.4c3.2-2.8 7.8-4.5 12.4-4.5 6.3 0 9.1 3.5 9.1 10.2v23.3l3.4 1.8V53h-18.9v-1.4l3.4-1.8V26.4c0-3.7-1.6-5.1-4.6-5.1a8 8 0 0 0-5 1.6v27l3.3 1.8V53h-19v-1.3l3.5-2zM153.7 36c.4 7.4 3.7 13.1 11.6 13.1 3.8 0 6.5-1.7 9-3v1.4c-1.9 2.7-6.9 6.5-13.8 6.5-12.2 0-18.5-6.8-18.5-18.5 0-11.5 6.8-18.6 17.9-18.6 10.3 0 15.7 5.2 15.7 18.8v.3h-21.9zm-.2-1.7 10.8-.6c0-9.2-1.6-15.3-4.8-15.3-3.3 0-6 7-6 16zM0 70.8c0-19.5 13-26.4 27.3-26.4 6.1 0 12 1 15.1 2.3l.3 13.6h-1.4L33 47.2c-1.5-.7-2.8-.9-5.4-.9-7.6 0-11.5 8.8-11.4 23.3.1 17.3 3.1 25.1 10.2 25.1 1.8 0 3.2-.2 4.2-.7V75.5l-4.7-2.7v-1.5h22.5V73l-4.6 2.5v18.3a50.1 50.1 0 0 1-17 2.9C10.5 96.7 0 89 0 70.8zm47.5-9v-1.2l15-2.7 1.7.2v29.6c0 3.6 1.7 4.7 4.6 4.7 1.9 0 3.6-.7 4.9-2.3V63.5l-4.1-1.8v-1.1l15-2.7 1.6.1v34l4 1.7v1l-14.9 1.9-1.5-.1V92h-.4a16.7 16.7 0 0 1-11.3 4.7c-7.2 0-10.5-4.2-10.5-10.7V63.5l-4.1-1.8zm95.3-4 1.2.2v11h.3c1.7-8 5.2-11 9.5-11 .7 0 1.5 0 1.9.2v11.2c-.7-.2-2-.2-3.1-.2-3.4 0-6 .6-8.2 1.6v21.7l3.4 1.9v1.4h-19.5v-1.4l3.5-2V63l-4.1-1.2v-1l15-2.8z
					M180.6 58.8V47.2l-4.1-1.4v-1l15.2-2.7 1.5.2V92l4.2 1.5v1.3l-15 2-1.2-.2v-4h-.4a13.4 13.4 0 0 1-10 4.1c-8.1 0-14.1-6.2-14.1-19 0-13.5 7-20 17.5-20 3 0 5.3.5 6.4 1.1zm0 31.8V61c-1-.6-1.7-1.4-4.2-1.3-4 .2-6.6 6.3-6.6 17.2 0 9.8 1.9 15.3 7.3 15.1 1.5 0 2.7-.6 3.5-1.3zM214 57.8l1.3.2v34.5l3.4 1.9v1.4h-19.5v-1.4l3.5-2v-29l-4.2-1.6v-1.2l15.5-2.8zm1.4-9.3c0 3.7-3.1 6.4-6.7 6.4a6.4 6.4 0 0 1-6.6-6.4c0-3.6 2.9-6.4 6.6-6.4 3.6 0 6.7 2.8 6.7 6.4zm46 44V63l-4.2-1.4v-1.5l15-2.7h1.5V62h.5c3.2-2.9 8-4.7 12.8-4.7 6.5 0 9.4 3 9.4 10v25.1l3.5 2v1.4h-19.5v-1.4l3.5-2V68c0-3.8-1.7-5.3-4.8-5.3-2 0-3.6.5-5.1 1.6v28.3l3.4 1.9v1.4h-19.6v-1.4l3.6-2zM239.8 74v-4.9c0-7.4-1.7-9.9-6.2-9.9l-1.6.2-8.2 11h-1.1V60.3c3.5-1.1 7.9-2.4 13.7-2.4 10 0 15.8 2.8 15.8 11.1v24l3.6 1v1c-1.4.8-4.2 1.6-7.4 1.6-5 0-7.3-1.6-8.4-4.3h-.3c-2 2.8-5 4.4-9.7 4.4-6 0-10-3.7-10-10s3.8-9.6 11.7-11.1l8-1.6zm0 16.6V75.8l-2.5.2c-4 .3-5.4 2.8-5.4 8.3 0 6 2 7.6 4.8 7.6 1.5 0 2.4-.5 3-1.3zM110.2 74v-4.9c0-7.4-1.6-9.9-6.2-9.9l-1.6.2-8.2 11h-1.1V60.3c3.5-1.1 7.9-2.4 13.7-2.4 10 0 15.8 2.8 15.8 11.1v24l3.6 1v1c-1.4.8-4.2 1.6-7.3 1.6-5 0-7.3-1.6-8.4-4.3h-.4c-2 2.8-5 4.4-9.7 4.4-6 0-10-3.7-10-10S94.2 77 102 75.5l8.1-1.6zm0 16.6V75.8l-2.5.2c-4 .3-5.3 2.8-5.3 8.3 0 6 2 7.6 4.7 7.6 1.5 0 2.4-.5 3.1-1.3z"
				/>
				<path
					data-content="For ___ years"
					d="M223.8 45c.5-1.5.5-1.7-.4-2h-.3l.1-.4h6.9l-.6 2.2c-.1.2-.4.1-.4 0 0-.9.1-1.3-.6-1.5l-1.7-.1h-.8c-.5 0-.5 0-.6.5l-1.1 3.7c-.1.3-.1.4.2.4h1.1c1.5 0 1.8-.1 2.2-.8l.2-.6h.5l-.6 1.7-.4 1.6c0 .1-.3.1-.4 0v-.6c0-.6-.3-.7-1.6-.7h-1.2c-.3 0-.4 0-.5.4l-.7 2.4c-.4 1.6-.5 2 .3 2h.6v.5h-4c-.1-.1-.1-.3 0-.4h.5c.8-.2 1-.4 1.4-2l1.9-6.3zm7 3.1a9.8 9.8 0 0 0-1.6 4.2c0 .6.2 1 .7 1 .3 0 .7 0 1.2-.8.7-1 1.4-3.2 1.5-4 0-.6-.1-1.2-.7-1.2-.3 0-.7.2-1.1.8zm2.9.8c0 1-.5 2.6-1.7 3.8-1 1-1.8 1.2-2.3 1.2-1 0-1.6-.8-1.5-2.3 0-1 .6-2.6 1.7-3.7.8-.8 1.5-1 2.2-1 1 0 1.6.8 1.6 2zm3-.5-.6 2.1 1.7-2.8c.4-.5.8-.8 1.2-.8.5 0 .6.5.6.8 0 .2-.1.7-.3 1-.2.2-.5.2-.5-.1-.1-.5-.2-.7-.4-.7l-.5.5c-1 1.3-1.8 3.4-2.7 5.3 0 .1-.1.2-.3.2-.1 0-.6 0-.5-.5l1.7-5.2c0-.2 0-.4-.2-.4-.4 0-.8.5-1 1-.3 0-.4-.1-.3-.3.5-1 1-1.6 1.8-1.6s.5 1 .4 1.5zm36 .6c0 1 0 2.3-.3 3.7a14 14 0 0 0 2-6c0-.4.2-.5.4-.5 0 0 .3 0 .4.2l.1.3c0 .4-.4 2.6-1.8 5-.8 1.5-1.3 2.6-2.6 4-1.2 1.5-2 1.7-2.5 1.7s-.8-.3-.8-.7c0-.4.3-.7.7-.7.1 0 .3 0 .4.2 0 .1.2.3.4.3s.5-.1.9-.4a6 6 0 0 0 1.4-2.5c.2-.9.3-2.4.3-3.8 0-1.9-.3-2.5-.6-2.5s-.6.5-1 1.2c0 0-.2 0-.2-.2.3-1 1-2.1 1.8-2.1s.9 1.7 1 2.8zm5.2-1.5c-.6.7-1 1.5-1.1 2 1-.4 1.5-.7 2-1.3.6-.5.7-1 .7-1.1 0-.2 0-.4-.4-.4-.2 0-.6.2-1.2.8zm2.5-.3c0 1.3-1.5 2.1-3.8 2.8l-.2 1.4c0 .6.3 1 .7 1 .6 0 1-.3 1.7-1l.2.3c-1 1.3-1.9 1.5-2.5 1.5-1 0-1.3-.9-1.3-1.7 0-1 .6-3.1 2.3-4.5.9-.7 1.5-.8 2-.8.6 0 1 .6 1 1zm2.8.5c-1 1-2 3.1-2 4.3 0 .2 0 .3.2.3s.7-.2 1.6-1a8.1 8.1 0 0 0 2-3.6.8.8 0 0 0-.7-.6c-.4 0-.7.1-1.1.6zm2.7-1.9c.3-.1.7 0 .8.3a278.6 278.6 0 0 0-2 6.2c.2 0 .7-.3 1.6-1.2.1 0 .2.1.2.3-.6.9-1.8 1.8-2.6 1.8-.4 0-.5-.3-.5-.4l.2-.7.5-1.5c-1.2 1.5-2.8 2.6-3.5 2.6-.5 0-.7-.4-.7-1 0-.3.3-1.6 1.4-3.1a7 7 0 0 1 2-2.2c.7-.4 1-.5 1.5-.5l.4.1a1 1 0 0 1 .3.4l.4-1zm3.6 2-.6 2a24 24 0 0 1 1.7-2.7c.4-.5.7-1 1.1-1 .6 0 .7.7.7 1l-.4 1c-.2.2-.4.2-.5-.2 0-.4-.1-.6-.3-.6-.1 0-.3.1-.5.5-1 1.3-1.9 3.3-2.7 5.2 0 .2-.2.2-.3.2-.2 0-.6 0-.5-.4.2-.7 1.2-3.6 1.6-5.3l-.1-.3c-.4 0-.9.5-1.1.9-.2 0-.3-.1-.3-.3.5-1 1.1-1.6 1.9-1.6.8 0 .5 1.1.3 1.6zm6.2-.7c0 .3-.2.5-.3.6-.1 0-.2 0-.3-.2-.3-.3-.5-.5-1-.5-.4 0-.6.4-.6.7 0 .3 0 .7.5 1.5.4.7.7 1.1.6 1.8 0 .5-.2 1-.8 1.6-.4.4-1 .6-1.6.6a1 1 0 0 1-1-.9l.3-.5a.3.3 0 0 1 .4 0c.2.2.7.7 1 .7.5 0 .9-.4.9-1 0-.3-.2-.8-.6-1.4-.4-.7-.6-1.3-.6-1.6 0-.6.3-1.1 1-1.7a2 2 0 0 1 1.1-.6c.6 0 1 .5 1 1z"
				/>
			</g>
			<g fill={brandAlt[400]}>
				<path
					data-content="200"
					d="M248.4 51.6h-6l2-1c2.7-1.5 4-2.7 4-4.7 0-1.9-1.5-2.9-4-2.9-1.2 0-2.4.2-3.3.5v3.1h.2l2.3-3.3c1.3 0 1.8 1 1.8 2.6s-.7 3-2.3 4.6l-2.2 2V54h7.3l.2-2.3zm5.3 2.4c2.5 0 4.6-1.8 4.6-5.5s-2-5.5-4.6-5.5c-2.5 0-4.7 1.8-4.7 5.6 0 3.6 2.2 5.4 4.7 5.4zm0-.2c-1 0-1.5-1.7-1.5-5.3 0-3.5.4-5.2 1.5-5.2 1 0 1.4 1.7 1.4 5.3 0 3.5-.3 5.2-1.4 5.2zm10 .2c2.5 0 4.6-1.8 4.6-5.5s-2-5.5-4.5-5.5-4.7 1.8-4.7 5.6c0 3.6 2 5.4 4.6 5.4zm0-.2c-1 0-1.5-1.7-1.5-5.3 0-3.5.5-5.2 1.5-5.2 1.1 0 1.4 1.7 1.4 5.3 0 3.5-.3 5.2-1.4 5.2z"
				/>
				<path
					data-content="News website of the year"
					d="M73.8 100.3h2.3l3 5.1c.9 1.6 1.9 4 1.9 4l-.1-4.2v-4.9h1.8V112h-2l-3.2-5.6c-1-1.6-2-4-2-4l.2 4.2v5.4h-1.8v-11.7zm10.8 7.8v-.8c0-2.9 1.7-4.2 3.9-4.2 2.5 0 3.6 1.3 3.6 4v1.1h-5.5c0 2 1 2.4 2.6 2.4 1.1 0 1.9-.3 2.6-.6v1.4c-.6.3-1.5.8-3 .8-2.9 0-4.2-1.5-4.2-4.1zm2-1.3h3.5c0-1.7-.6-2.3-1.7-2.3-.9 0-1.7.4-1.8 2.3zm6.3-3.6h2l.8 3.3.7 4s.4-2.6.8-4l1-3.3h1.7l.8 3.3.9 4 .7-4 .8-3.3h1.8l-2.4 8.8h-2l-1-3.5-.6-3.7s-.2 2.3-.6 3.7l-1 3.5h-2l-2.4-8.8zm12.9 8.4V110a6 6 0 0 0 2.5.6c1.2 0 1.7-.4 1.7-1s-.2-.9-1.2-1l-1-.3c-1.2-.3-2-1-2-2.6s1-2.6 3.1-2.6c1.2 0 2 .2 2.5.5v1.5c-.5-.2-1.3-.4-2.3-.4-1 0-1.5.3-1.5.9 0 .6.3.8 1 1l1 .2c1.7.4 2.3 1.1 2.3 2.6 0 1.8-1.2 2.8-3.3 2.8-1.1 0-2.1-.2-2.8-.6zm11-8.4h2l.7 3.3c.4 1.4.8 4 .8 4s.4-2.6.8-4l.9-3.3h1.7l.9 3.3c.4 1.4.8 4 .8 4l.8-4 .8-3.3h1.7l-2.3 8.8h-2l-1-3.5c-.4-1.4-.6-3.7-.6-3.7s-.3 2.3-.7 3.7l-1 3.5h-2l-2.4-8.8zm12.8 4.9v-.8c0-2.9 1.7-4.2 3.9-4.2 2.6 0 3.6 1.3 3.6 4v1.1h-5.4c0 2 .8 2.4 2.5 2.4 1.2 0 1.9-.3 2.6-.6v1.4c-.5.3-1.5.8-3 .8-2.8 0-4.2-1.5-4.2-4.1zm2-1.3h3.6c0-1.7-.6-2.3-1.7-2.3-1 0-1.8.4-1.9 2.3zm7.1 4.7v-12h2v4.5c.7-.5 1.4-1 2.5-1 1.6 0 3.3 1 3.3 4v.8c0 3-1.5 4.4-4.4 4.4-1.2 0-2.6-.3-3.4-.7zm5.7-3.4v-.9c0-2-.6-2.5-2-2.5-.8 0-1.4.3-1.7.4v5.3c.3.1.7.3 1.5.3 1.2 0 2.2-.4 2.2-2.6zm3.2 3.5V110a6 6 0 0 0 2.6.6c1.2 0 1.6-.4 1.6-1s-.1-.9-1-1l-1-.3c-1.3-.3-2.1-1-2.1-2.6s1-2.6 3.1-2.6c1.2 0 2 .2 2.5.5v1.5c-.5-.2-1.3-.4-2.3-.4-1 0-1.5.3-1.5.9 0 .6.3.8 1 1l1 .2c1.7.4 2.3 1.1 2.3 2.6 0 1.8-1.2 2.8-3.3 2.8-1.1 0-2.2-.2-2.9-.6zm7.7-11.8h2v1.9h-2v-1.9zm0 3.4h2v8.8h-2v-8.8zm4.7 6.7v-5.1h-1.5v-1.6h1.5v-2h2v2h2.2v1.6h-2.3v4.8c0 .8.3 1 1.1 1l1.3-.2v1.3a4 4 0 0 1-2 .4c-1.4 0-2.3-.5-2.3-2.2zm5.3-1.8v-.8c0-2.9 1.7-4.2 3.9-4.2 2.5 0 3.6 1.3 3.6 4v1.1h-5.5c0 2 1 2.4 2.6 2.4 1.1 0 1.9-.3 2.6-.6v1.4c-.6.3-1.5.8-3 .8-2.9 0-4.2-1.5-4.2-4.1zm2-1.3h3.5c0-1.7-.6-2.3-1.7-2.3-.8 0-1.7.4-1.8 2.3zm10.7 1.3v-.8c0-2.7 1.8-4.2 4-4.2 2.6 0 4 1.4 4 4.1v.8c0 2.8-1.7 4.2-4 4.2-2.5 0-4-1.5-4-4.1zm6 0v-.9c0-2.2-.9-2.6-2-2.6-1.2 0-2 .8-2 2.6v.9c0 2.1 1 2.6 2 2.6 1.3 0 2-.7 2-2.6zm4.3-3.3H187v-1.6h1.4v-1c0-2 1.2-2.8 2.8-2.8.8 0 1.4.2 1.7.3v1.4a5 5 0 0 0-1.1-.1c-1 0-1.4.4-1.4 1.4v.9h2v1.5h-2v7.2h-2v-7.2zm10.2 5.1v-5.1H197v-1.6h1.5v-2h2v2h2.2v1.6h-2.2v4.8c0 .8.2 1 1 1l1.3-.2v1.3a4 4 0 0 1-1.9.4c-1.5 0-2.4-.5-2.4-2.2zm5.7-10.4h2v4.6a4 4 0 0 1 2.8-1c1.6 0 2.4.7 2.4 2.4v6.5h-2v-6c0-.9-.2-1.2-1.4-1.2-.6 0-1.3.2-1.8.4v6.8h-2V99.5zm8.8 8.6v-.8c0-2.9 1.7-4.2 3.9-4.2 2.5 0 3.6 1.3 3.6 4v1.1H215c0 2 .9 2.4 2.6 2.4 1.1 0 1.8-.3 2.6-.6v1.4c-.6.3-1.5.8-3 .8-2.9 0-4.2-1.5-4.2-4.1zm2-1.3h3.5c0-1.7-.6-2.3-1.7-2.3-.9 0-1.8.4-1.8 2.3zm10.6 8.3v-1.4l.9.1c.7 0 1.2-.3 1.5-1.1l.4-.8-3.1-8.7h2l1 2.9c.6 1.8 1 4.2 1 4.2s.5-2.4 1.1-4.2l1-2.9h1.9l-3.4 9.8c-.6 1.6-1.4 2.4-3 2.4a3 3 0 0 1-1.3-.3zm8.3-7v-.8c0-2.9 1.6-4.2 3.8-4.2 2.6 0 3.6 1.3 3.6 4v1.1H236c0 2 .9 2.4 2.5 2.4 1.2 0 2-.3 2.7-.6v1.4c-.6.3-1.6.8-3 .8-2.9 0-4.2-1.5-4.2-4.1zm2-1.3h3.5c0-1.7-.6-2.3-1.7-2.3-.9 0-1.8.4-1.8 2.3zm6.5 2.9c0-1.7 1-2.4 2.7-2.6l2-.3v-.7c0-1-.5-1.4-2-1.4-.7 0-1.5.2-2 .3v-1.4c.8-.4 1.7-.5 2.9-.5 2 0 3 .8 3 2.6v6.3h-1.6l-.1-.9h-.1c-.4.6-1 1-2.2 1-1.5 0-2.6-.7-2.6-2.4zm4.7.6V108l-1.5.2c-.9 0-1.2.5-1.2 1.4 0 .8.5 1.2 1.2 1.2.6 0 1.2-.2 1.5-.5zm4-7h1.8v1.1c.5-.7 1.5-1.3 2.4-1.3l.5.1v1.8a4.7 4.7 0 0 0-.7 0c-.7 0-1.6.2-2.1.5v6.5h-2v-8.8z"
				/>
			</g>
		</svg>
	);
};

const AnniversaryLogo = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 300 124"
			css={svgSize}
			aria-labelledby="AnniversaryLogoTitle"
		>
			<title id="AnniversaryLogoTitle">The Guardian. For 200 years.</title>
			<g fill={brandText.primary}>
				<path
					data-content="The Guardian"
					d="m68.13 51.5 5.15-2.68V8.49h-3.9l-9.51 12.58h-1.08l.61-14.02h41.26l.6 14.02h-1.13L90.81 8.49h-4v40.25L92 51.45v1.37H68.13v-1.34zm37.27-1.79V5.01l-4-1.59V2.6L115.87 0h1.52v21.15l.4-.34c3.2-2.79 7.8-4.58 12.4-4.58 6.34 0 9.14 3.56 9.14 10.2v23.28l3.38 1.83v1.36H123.8v-1.35l3.4-1.84V26.34c0-3.64-1.6-5.1-4.6-5.1-2 0-3.73.62-5.01 1.64v26.88l3.33 1.84v1.3H102v-1.3l3.41-1.89zm48.33-13.73c.4 7.4 3.72 13.1 11.6 13.1 3.8 0 6.5-1.75 9.05-3.1v1.46c-1.97 2.68-6.96 6.45-13.91 6.45-12.21 0-18.45-6.76-18.45-18.46 0-11.44 6.83-18.56 17.85-18.56 10.37 0 15.76 5.16 15.76 18.75v.35h-21.9v.01zm-.2-1.7 10.74-.65c0-9.15-1.58-15.23-4.73-15.23-3.34 0-6.01 7.05-6.01 15.89zM0 70.72c0-19.45 12.93-26.37 27.34-26.37 6.1 0 11.88.97 15.1 2.3l.28 13.59h-1.37L32.89 47.1c-1.44-.61-2.82-.86-5.35-.86-7.65 0-11.57 8.81-11.45 23.26.15 17.28 3.16 25.13 10.18 25.13 1.83 0 3.24-.28 4.22-.7V75.4l-4.64-2.65V71.2h22.42v1.65l-4.57 2.55v18.26c-3.79 1.48-10.19 2.88-16.94 2.88C10.4 96.55 0 88.99 0 70.72zm47.48-9.07v-1.13l15.07-2.65 1.65.14V87.6c0 3.56 1.73 4.67 4.61 4.67 1.86 0 3.55-.7 4.89-2.3V63.43l-4.13-1.78v-1.17l15.07-2.65 1.51.14v33.9l4.07 1.7v1.08l-14.87 1.82-1.51-.14v-4.45h-.42c-2.76 2.54-6.6 4.73-11.3 4.73-7.22 0-10.53-4.25-10.53-10.7V63.43l-4.11-1.78zm95.29-3.84 1.23.14V68.9h.34c1.6-8.03 5.17-11.03 9.5-11.03.69 0 1.45.07 1.86.28v11.2c-.7-.2-1.93-.27-3.1-.27-3.44 0-5.97.61-8.2 1.63v21.65l3.43 1.9v1.4H128.3v-1.4l3.52-1.89V62.82l-4.13-1.22v-1.01l15.09-2.78z
				M180.62 58.73V47.18l-4.13-1.45v-.92l15.21-2.79 1.45.2v49.63l4.2 1.52v1.28l-15 2.01-1.17-.13v-4.1h-.34a13.43 13.43 0 0 1-10 4.17c-8.19 0-14.17-6.23-14.17-18.99 0-13.44 6.95-20.05 17.49-20.05 3.01 0 5.3.56 6.46 1.17zm-.03 31.78V60.83c-.97-.61-1.66-1.38-4.16-1.3-4.07.15-6.58 6.27-6.58 17.17 0 9.8 1.8 15.29 7.23 15.1a5.37 5.37 0 0 0 3.51-1.3zm33.48-32.73 1.31.14v34.43l3.44 1.9v1.4h-19.55v-1.4l3.52-1.89v-29l-4.2-1.65v-1.14l15.48-2.8zm1.38-9.3c0 3.64-3.1 6.37-6.67 6.37-3.72 0-6.61-2.74-6.61-6.37 0-3.64 2.9-6.45 6.6-6.45 3.59 0 6.68 2.81 6.68 6.45zm46 43.88V63.04l-4.13-1.45v-1.42l15.01-2.78 1.51.13v4.4h.42a19.84 19.84 0 0 1 12.8-4.74c6.54 0 9.44 3.09 9.44 9.95V92.3l3.5 1.95v1.4h-19.54v-1.4l3.5-1.89V67.82c0-3.78-1.64-5.28-4.74-5.28-2 0-3.64.5-5.16 1.63v28.18l3.44 1.9v1.4h-19.56v-1.4l3.51-1.89zm-21.68-18.43v-4.92c0-7.4-1.62-9.83-6.22-9.83-.54 0-1.01.06-1.55.13l-8.19 11.05h-1.15V60.2c3.51-1.08 7.91-2.35 13.73-2.35 10.01 0 15.83 2.77 15.83 11.11v23.98l3.6.94v.95c-1.43.88-4.27 1.68-7.39 1.68-4.94 0-7.3-1.6-8.39-4.31h-.34c-2.1 2.83-5.06 4.44-9.74 4.44-5.95 0-10-3.7-10-10.1 0-6.2 3.85-9.56 11.7-11.05l8.1-1.55zm0 16.57V75.68l-2.5.2c-3.93.34-5.35 2.84-5.35 8.36 0 5.99 1.96 7.55 4.74 7.55 1.55-.01 2.44-.48 3.1-1.29zM110.2 73.93v-4.92c0-7.4-1.62-9.83-6.23-9.83-.54 0-1 .06-1.55.13l-8.19 11.05h-1.15V60.2c3.52-1.08 7.91-2.35 13.74-2.35 10 0 15.83 2.77 15.83 11.11v23.98l3.58.94v.95c-1.41.88-4.25 1.68-7.37 1.68-4.94 0-7.3-1.6-8.4-4.31h-.33c-2.1 2.83-5.08 4.44-9.74 4.44-5.95 0-10.01-3.7-10.01-10.1 0-6.2 3.85-9.56 11.7-11.05l8.12-1.55zm0 16.57V75.68l-2.5.2c-3.93.34-5.34 2.84-5.34 8.36 0 5.99 1.95 7.55 4.73 7.55 1.55-.01 2.43-.48 3.11-1.29z"
				/>
				<path
					data-content="For ___ years"
					d="m164.09 123.32-1.39-2.68v-.37h4.98l-5.8-15.18-1.12-.57v-.42H168v.42l-1.45.65 3.12 9.05 2.7-8.63-1.83-1.07v-.42h3.73v.42l-1.41 1-4.25 13.35c-.76 2.37-2.2 3.93-4.51 4.45zm13.58-12.9c.17 3.35 1.17 5.4 4.47 5.4 1.08 0 1.99-.14 2.86-.54v.39c-.73 1.17-2.51 2.38-5.07 2.38-4.34 0-6.57-2.77-6.57-7.21 0-4.34 2.44-7.05 6.38-7.05 3.96 0 5.63 2.24 5.63 6.28v.34h-7.7v.01zm0-.5 3.64-.17c0-4.27-.54-5.48-1.67-5.48-1.22 0-1.96 1.74-1.96 5.65zm14.95-.22v-1.81c0-2.76-.57-3.64-2-3.64-.16 0-.3.02-.47.05l-3.16 4.53h-.4l.1-4.21c1.21-.4 2.73-.85 4.75-.85 3.47 0 5.5 1.02 5.5 4.1v8.82l1.24.34v.35c-.5.33-1.48.62-2.56.62-1.71 0-2.54-.6-2.9-1.6h-.13c-.73 1.05-1.76 1.65-3.37 1.65-2.07 0-3.48-1.37-3.48-3.72 0-2.28 1.34-3.52 4.06-4.07l2.82-.56zm0 6.1v-5.45l-.87.08c-1.36.12-1.85 1.04-1.85 3.08 0 2.2.67 2.77 1.64 2.77.54 0 .84-.18 1.08-.47zm11.57-11.95.43.05v3.87h.12c.65-2.96 1.73-4.07 3.18-4.07.24 0 .5.02.64.1v4.09c-.23-.08-.65-.1-1.06-.1-1.17 0-2.03.12-2.79.44v8.66l1.74.37v.42h-7.37v-.42l1.34-.37v-11.23l-1.4-.6v-.42l5.17-.79zm15.25 9.67c0 2.8-1.86 4.5-5.28 4.5-1.54 0-3.14-.2-4.38-.7l-.14-4.02h.4l3.35 4.14c.23.08.49.12.7.12 1.44 0 2.1-.82 2.1-2.09 0-1.11-.58-1.53-2.04-2.28l-.78-.37c-2.34-1.17-3.7-2.38-3.7-4.66 0-2.78 1.83-4.42 4.97-4.42 1.3 0 2.7.12 3.78.45l.12 3.74h-.4l-2.56-3.62a2.44 2.44 0 0 0-.82-.15c-1.27 0-1.84.78-1.84 1.88 0 1.21.55 1.62 2.12 2.38l.73.34c2.4 1.22 3.67 2.28 3.67 4.76zm-146.72 4.12 1.57-.35v-16.31l-1.54-.37v-.42H86.4l.12 5.8h-.4l-3.04-5.33h-3.83v8.4h1.88l2.13-3.3h.4v7.13h-.4l-2.14-3.33h-1.87v7.77l1.83.32v.43h-8.35v-.44zm12.88-6.42c0-4.36 2.63-7.07 6.57-7.07 3.93 0 6.61 2.7 6.61 7.1 0 4.41-2.62 7.19-6.59 7.19-3.92 0-6.59-2.8-6.59-7.22zm4.63.03c0 5.36.68 6.74 2 6.74 1.28 0 1.94-1.42 1.94-6.77 0-5.33-.63-6.62-1.97-6.62-1.3 0-1.97 1.31-1.97 6.65zm13.83-7.02.42.05v3.87h.12c.66-2.96 1.74-4.07 3.2-4.07.22 0 .48.03.63.1v4.1c-.23-.08-.66-.1-1.06-.1-1.17 0-2.04.11-2.8.44v8.66l1.74.37v.42h-7.36v-.42l1.34-.37v-11.25l-1.41-.59v-.42l5.18-.79z"
				/>
			</g>
			<path
				data-content="200"
				fill={brandAlt[400]}
				d="M124.55 114.4h-10.54v-.08l3.52-1.85c4.65-2.46 6.87-4.68 6.87-8 0-3.37-2.43-5.1-6.68-5.1-2.25 0-4.34.32-5.84.9l-.13 5.4h.44l3.98-5.78c2.2 0 3.15 1.63 3.15 4.5 0 2.84-1.16 5.26-4.08 8.03l-3.77 3.58v2.28h12.74l.34-3.88zm9.18 3.74c-1.88 0-2.59-2.97-2.59-9.26 0-6.07.72-9.04 2.56-9.04 1.88 0 2.51 2.9 2.51 9.3 0 6.07-.63 9-2.48 9zm-.08.47c4.42 0 8.09-3.23 8.09-9.68 0-6.43-3.6-9.55-7.91-9.55-4.37 0-8.22 3.15-8.22 9.7 0 6.28 3.7 9.53 8.04 9.53zm17.53-.39c-1.88 0-2.58-2.97-2.58-9.27 0-6.06.72-9.03 2.56-9.03 1.88 0 2.5 2.9 2.5 9.3 0 6.06-.62 9-2.48 9zm-.08.46c4.42 0 8.09-3.23 8.09-9.68 0-6.42-3.6-9.55-7.9-9.55-4.37 0-8.22 3.16-8.22 9.71 0 6.27 3.7 9.52 8.03 9.52z"
			/>
		</svg>
	);
};

const DecideLogo = ({ logoType }: { logoType: LogoType }) => {
	switch (logoType) {
		case 'anniversary':
			return <AnniversaryLogo />;
		case 'standard':
			return <StandardLogo />;
		case 'bestWebsite':
			return <BestWebsiteLogo />;
	}
};

const logoStyles = css`
	/* Adding block display here so that the focus halo correctly covers the content */
	display: block;
`;

/**
 * [Storybook](https://guardian.github.io/csnx/?path=/docs/source-react-components-development-kitchen_logo--desktop) •
 * [Design System](https://theguardian.design) •
 * [GitHub](https://github.com/guardian/csnx/tree/main/libs/@guardian/source-react-components-development-kitchen/components/logo) •
 * [NPM](https://www.npmjs.com/package/@guardian/source-react-components-development-kitchen)
 */
export const Logo = ({
	logoType = 'standard',
	cssOverrides,
}: LogoProps): EmotionJSX.Element => (
	<a
		href="https://www.theguardian.com"
		title="The Guardian Homepage"
		css={[logoStyles, cssOverrides]}
	>
		<span
			css={css`
				${visuallyHidden};
			`}
		>
			The Guardian - Back to home
		</span>
		<DecideLogo logoType={logoType} />
	</a>
);
