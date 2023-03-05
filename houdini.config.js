/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'https://api.bergflix.de/graphql'
	},
	plugins: {
		'houdini-svelte': {}
	},
	scalars: {
		Date: {
			type: 'string'
		}
	}
};

export default config;
