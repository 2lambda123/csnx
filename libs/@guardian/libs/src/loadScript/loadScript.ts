/**
 * Loads an external JavaScript file by injecting a `script` element into the page.
 *
 * Returns a promise that resolves once the script has loaded, or rejects if something goes wrong.
 *
 * If a script has been loaded already, it will resolve immediately.
 *
 * @param src - URL for the script `src`
 * @param props - any valid `script` attributes other than `src`, `onload` or `onerror`
 */

export const loadScript = (
	src: string,
	props?: Omit<Partial<HTMLScriptElement>, 'src' | 'onload' | 'onerror'>,
): Promise<Event | undefined> =>
	new Promise((resolve, reject) => {
		// creating this before the check below allows us to compare the resolved `src` values
		const script = document.createElement('script');
		script.src = src;

		// dont inject 2 scripts with the same src
		if (Array.from(document.scripts).some(({ src }) => script.src === src)) {
			return resolve(void 0);
		}

		Object.assign(script, props);

		script.onload = resolve;
		script.onerror = (
			event: string | Event,
			source,
			lineno,
			colno,
			error: Error | undefined,
		) => {
			if (error) {
				reject(error);
				return;
			}

			if (typeof event === 'string') {
				reject(new Error(`Error loading script: src: ${src} event: ${event}`));
				return;
			}

			if (event instanceof Event) {
				const target = event.target as Element;
				const targetSrc = target.getAttribute('src') ?? '';
				reject(
					new Error(
						`Error loading script: src: ${src} targetSrc: ${targetSrc}`,
					),
				);
				return;
			}

			reject(new Error(`Error loading script: src: ${src}`));
		};

		const ref = document.scripts[0];
		ref?.parentNode?.insertBefore(script, ref);
	});
