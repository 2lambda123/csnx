import { readFile } from 'fs/promises';

let config = {
	src: 'src/space.tokens.json',
	dest: 'dist',
	prefix: 'source',
};

let flattenedTokens = [];

const parseTokens = (tokens, name, type) => {
	Object.keys(tokens).forEach((key) => {
		if (tokens[key]['$type']) {
			type = tokens[key]['$type'];
		}

		if (key === '$value') {
			flattenedTokens.push({
				name,
				type,
				value: tokens[key],
			});
		}

		if (typeof tokens[key] === 'object') {
			const newName = name ? `${name}.${key}` : key;
			parseTokens(tokens[key], newName, type);
		}
	});
};

console.log('Building tokens.');
try {
	const rawTokens = await readFile(config.src, { encoding: 'utf-8' });
	const parsedTokens = JSON.parse(rawTokens);

	parseTokens(parsedTokens);
	console.log(flattenedTokens);
} catch (err) {
	console.error(err.message);
}
