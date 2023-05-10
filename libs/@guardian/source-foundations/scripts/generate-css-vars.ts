import { snakeCase } from 'https://deno.land/x/case/mod.ts';
import { palette } from '../src/colour/palette.ts';
import * as typography from '../src/typography/index.ts';

let cssVars = '';

for (const [pillar, variants] of Object.entries(palette)) {
	for (const [variant, value] of Object.entries(variants)) {
		cssVars += `--source-palette-${snakeCase(pillar)}-${snakeCase(
			variant,
		)}: ${value};\n`;
	}
}

for (const [family, value] of Object.entries(typography.fonts)) {
	cssVars += `--source-font-family-${snakeCase(family)}: ${value};\n`;
}

// const cssVars = Object.entries(palette).reduce(
// 	(acc, [key, value]) => `${acc}--${key}: ${value};\n`,
// 	'',
// );

console.log(cssVars);
