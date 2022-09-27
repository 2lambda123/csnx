# `@guardian/source-react-components`

[![npm](https://img.shields.io/npm/v/@guardian/source-react-components)](https://www.npmjs.com/package/@guardian/source-react-components)

A set of robust, accessible React components built using `@guardian/source-foundations`.

## Install

```sh
$ yarn add @guardian/source-react-components
```

or

```sh
$ npm install @guardian/source-react-components
```

> You must install `react`, `@emotion/react` and `@guardian/source-foundations` to use Source components.

## Example

```tsx
import { TextInput, Button } from '@guardian/source-react-components';

const Form = () => (
	<form>
		<TextInput label="First name" />
		<Button>Submit</Button>
	</form>
);
```

## Theming

By default, all components are styled using their light theme.

To apply a different theme, we recommend using [Emotion's theming API](https://emotion.sh/docs/theming). You can import the desired theme from `@guardian/source-react-components`

To compose a theme for specific components:

```jsx
import { ThemeProvider } from '@emotion/react';
import {
	Button,
	buttonThemeBrand,
	TextInput,
	textInputThemeBrand,
} from '@guardian/source-react-components';

const Form = () => (
	<ThemeProvider theme={{ ...buttonThemeBrand, ...textInputThemeBrand }}>
		<form>
			<TextInput label="First Name" />
			<Button>Click me</Button>
		</form>
	</ThemeProvider>
);
```

### Available themes

Standard themes available from `@guardian/source-react-components`:

- **default – exported as `[componentName]ThemeDefault`**
- **brand – exported as `[componentName]ThemeBrand`**
- **brandAlt – exported as `[componentName]ThemeBrandAlt`**

To find out which themes a component supports, check its stories under `Packages/source-react-components/<ComponentName>`

Note that some components have their own unique themes in addition to the standard set of themes. For instance, the button component defines [two themes for use in Reader Revenue flows](https://theguardian.design/2a1e5182b/p/435225-button/t/41a3ce).

## Overriding styles

To extend or override the styles of Source components, pass `SerializedStyles` generated by the `css` function to the `cssOverrides` prop.

```jsx
import { css } from '@emotion/react';

const dangerStyles = css`
	background-colour: ${palette.error[500]};
	color: ${palette.neutral[100]};

	&:hover {
		background-colour: ${palette.error[400]};
	}
`;

const Danger = () => (
	<Button cssOverrides={dangerStyles}>Delete my account</Button>
);
```

The `cssOverrides` prop is mixed into the `css` prop for the main element of the component. This differs from component to component. You'll need to look at the source code for the component to see where your overrides will be applied.

### Using classNames

If you are using a CSS solution that relies on passing the `className` prop, you can pass your `className` to the Source component as normal.

One caveat here is that `@emotion/react`, which Source components use for styling, appends style tags to the bottom of the document head. Since they appear at the end of the cascade, they tend to override other styles unless the other styles have a higher specificity.

**You may therefore need to mark overrides as** `!important` **in order to ensure they are applied.**