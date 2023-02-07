import { promises } from 'fs';
import path from 'path';
import prettierConfig from '@guardian/prettier';
import mkdirp from 'mkdirp';
import { format } from 'prettier';
import { createIconComponent } from './create-icon-component';
import { createReadme } from './create-readme';
import { getIconsFromFigma } from './get-svgs-from-figma';

const { writeFile, rm } = promises;

// most icons are the same and can be run through the component generator
// but some are different and need to be handled separately
const SPECIAL_CASES = {
	retainFill: [
		'apple-brand',
		'facebook-brand',
		'google-brand',
		'pay-pal-brand',
		'telegram-brand',
		'signal-brand',
		'whats-app-brand',
	],
	isWide: ['direct-debit-wide'],
};

const VENDOR_ICON_PATH = path.resolve(__dirname, '..', '..', 'vendor', 'icons');

const warning = [
	'// DO NOT EDIT',
	'// this file is auto-generated by packages/@guardian/source-react-components/scripts/create-icons/index.ts',
	'',
].join('\n');

// now we start fetching SVGs and building our components
void (async () => {
	console.log('Removing old icons');

	// remove any existing icons from a previous run
	try {
		await rm(VENDOR_ICON_PATH, { recursive: true });
	} catch (e) {
		// do nothing
	}

	// create the icons directory
	await mkdirp(VENDOR_ICON_PATH);

	console.log('Creating readme');

	// create a readme
	await writeFile(
		path.resolve(VENDOR_ICON_PATH, 'README.md'),
		createReadme(),
		'utf8',
	);

	console.log('Getting SVGs from Figma');

	const icons = await getIconsFromFigma();

	console.log(`Creating components`);

	// fetch the SVGs from Figma, create a react component from them using svgr
	// and save them both
	for (const icon of icons) {
		const { component, componentName } = await createIconComponent({
			icon,
			retainFill: SPECIAL_CASES.retainFill.includes(icon.name),
			isWideIcon: SPECIAL_CASES.isWide.includes(icon.name),
		});

		const filepath = path.resolve(VENDOR_ICON_PATH, `${componentName}.tsx`);

		await writeFile(
			filepath,
			// @ts-expect-error -- Some prettier config types are not narrowed.
			format(warning + component, { filepath, ...prettierConfig }),
			'utf8',
		);
	}
})();
