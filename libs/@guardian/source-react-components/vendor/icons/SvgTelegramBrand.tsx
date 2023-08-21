// DO NOT EDIT
// this file is auto-generated by packages/@guardian/source-react-components/scripts/create-icons/index.ts
import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../../src/@types/Icons';
const Svg = ({ size }: IconProps): EmotionJSX.Element => (
	<svg
		width={size ? iconSize[size] : undefined}
		height={undefined}
		viewBox="-3 -3 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		focusable={false}
		aria-hidden={true}
	>
		<path
			d="M12 22C17.5233 22 22 17.5233 22 12C22 6.47667 17.5233 2 12 2C6.47667 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22Z"
			fill="url(#paint0_linear_4181_6917)"
		/>
		<path
			d="M6.52666 11.8942L12.3583 9.37833L16.0892 8.01583C16.2273 8.01282 16.3628 8.05335 16.4767 8.13166C16.5558 8.20083 16.6067 8.29749 16.6192 8.40249C16.6394 8.53257 16.6449 8.6645 16.6358 8.79583C16.485 10.3767 15.8342 14.215 15.5042 15.9858C15.3642 16.7408 15.0875 16.9917 14.8208 17.0108C14.24 17.0642 13.7992 16.6275 13.2375 16.2558L11.0058 14.7567C10.0183 14.1067 10.6583 13.7508 11.2208 13.1642L13.9767 10.4725C13.9833 10.4417 13.9825 10.4092 13.9742 10.3783C13.9658 10.3475 13.9508 10.3192 13.93 10.295C13.8992 10.2758 13.865 10.2633 13.8283 10.26C13.7917 10.2567 13.7558 10.2617 13.7225 10.275C13.6342 10.295 12.2283 11.2242 9.50499 13.0625C9.10582 13.3367 8.74416 13.47 8.42083 13.4625C8.06333 13.455 7.37666 13.2608 6.86583 13.095C6.23666 12.8908 5.74166 12.7842 5.78499 12.4383C5.80583 12.2642 6.05249 12.0825 6.52666 11.8942Z"
			fill="white"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_4181_6917"
				x1="11.8742"
				y1="1.81167"
				x2="11.8742"
				y2="21.9375"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#2AABEE" />
				<stop offset="1" stopColor="#229ED9" />
			</linearGradient>
		</defs>
	</svg>
);

export const SvgTelegramBrand = ({
	size,
	isAnnouncedByScreenReader = false,
}: IconProps): EmotionJSX.Element => (
	<>
		<Svg size={size} />
		{isAnnouncedByScreenReader ? (
			<span
				css={css`
					${visuallyHidden}
				`}
			>
				Telegram logo
			</span>
		) : (
			''
		)}
	</>
);