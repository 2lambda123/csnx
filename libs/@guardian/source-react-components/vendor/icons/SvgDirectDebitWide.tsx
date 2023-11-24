// DO NOT EDIT
// this file is auto-generated by packages/@guardian/source-react-components/scripts/create-icons/index.ts
import { css } from '@emotion/react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { iconSize, visuallyHidden } from '@guardian/source-foundations';
import type { IconProps } from '../../src/@types/Icons';

const Svg = ({ size }: IconProps): EmotionJSX.Element => (
	<svg
		width={undefined}
		height={size ? iconSize[size] : undefined}
		viewBox="-1 2 50 20"
		xmlns="http://www.w3.org/2000/svg"
		focusable={false}
		aria-hidden={true}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M22.64 7.676h2.386s2.362-.048 2.338 2.1c-.023 1.598-2.29 1.836-2.29 1.836H22.64V7.676Zm7.137 7.707c.067.312.293.656 1.047.691 1.002.024 1.574-.358 1.574-.358v.74s-1.097.263-1.622.263c-.549 0-2.171-.12-2.171-1.623 0-1.216 1.336-1.598 2.1-1.598 1.335.047 1.98.525 1.956 1.884 0 .02-2.199.005-2.884 0Zm.003-.597h1.831s0-.692-.883-.692c-.664 0-.881.358-.948.692Zm5.791-.747c.265-.288.71-.518 1.456-.518 1.48 0 1.718 1.24 1.694 1.575-.024.334-.143 1.598-1.86 1.598-.65 0-1.046-.221-1.29-.496v.4h-1.168v-4.294h1.169v1.735Zm1.003 1.987c.692-.024 1.002-.62 1.002-.906 0-.286-.167-.883-1.05-.883-.685 0-.894.518-.955.77v.312c.06.257.27.707 1.003.707Zm10.092-.119.024.668s-.549.12-.907.12c-.357 0-1.288-.215-1.288-1.122v-1.384h-.978v-.62h.978v-.74h1.193v.74h.978v.62h-.978v1.193s0 .597.477.597.501-.072.501-.072ZM43.04 8.32h1.383v3.316h1.17V8.32H47v-.692h-3.96v.692Zm-.478.167.143-.692s-.596-.262-1.646-.262c-1.026 0-2.672.572-2.672 2.123 0 1.527 1.742 2.052 2.816 2.052 1.073 0 1.43-.167 1.43-.167l-.118-.764s-.478.144-1.289.144c-.787-.024-1.598-.645-1.598-1.336.024-.62.74-1.313 1.67-1.313.716 0 1.264.215 1.264.215Zm-10.545-.835s1.956-.095 1.956 1.05c0 .978-1.121 1.05-1.121 1.05s.31.047.453.262c.12.19.907 1.622.907 1.622h-1.194s-.19-.238-.286-.405a6.55 6.55 0 0 0-.286-.525s-.167-.597-.74-.597l-.43-.015v1.542h-1.145V7.652h1.886Zm-.74 1.79h.62s.86-.048.907-.573c.024-.501-.835-.573-.835-.573h-.692v1.145Zm4.795.62h1.91v-.74h-1.91v-.907h2.076v-.763h-3.244v3.984h3.269v-.715h-2.1v-.86Zm4.653 3.054h1.169v-.812h-1.17v.812Zm0 3.483h1.169v-3.03h-1.17v3.03Zm-12.74-4.963h1.145V7.652h-1.145v3.984ZM22.64 12.64h2.386s2.362-.049 2.338 2.099c-.023 1.598-2.29 1.837-2.29 1.837H22.64V12.64Zm1.17 3.197h.763s1.574-.096 1.574-1.313c0-1.216-1.67-1.336-1.67-1.336h-.668v2.649Zm0-4.963h.763s1.574-.12 1.574-1.312c0-1.241-1.67-1.336-1.67-1.336h-.668v2.648Zm-11.883-.825v7.983s-4.629-.836-4.629-4.009c0-2.53 3.427-3.646 4.63-3.974Zm0-.15c-2.782-.2-9.09 1.103-9.09 3.957 0 1.86 3.34 4.581 8.78 4.652.215 0 6.394-.238 6.299-6.87-.08-5.572-4.25-6.548-5.583-6.717v-.34c5.315.338 9.496 3.534 9.496 7.414 0 4.104-4.677 7.444-10.427 7.444S1 16.098 1 11.994 5.652 4.55 11.402 4.55c.177 0 .352.003.526.01v5.339Z"
		/>
	</svg>
);

export const SvgDirectDebitWide = ({
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
				Direct Debit logo
			</span>
		) : (
			''
		)}
	</>
);
