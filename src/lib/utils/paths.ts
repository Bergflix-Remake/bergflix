import type { MediaType } from '$lib/models/common';

const apex = 'bergflix.de';

/**
 * Returns the base path for the API
 * @param p The path to append to the base path.
 * @returns The base path for the API, or undefined if `p` is nullish.
 * @example base('uploads/') // https://api.bergflix.de/uploads/
 */
export const base = (p?: string) => (p ? new URL(p, `https://api.${apex}/`).toString() : undefined);

/**
 * Returns the path for the API.
 * @param p The path to append to the base path.
 * @returns The path for the API, or undefined if `p` is nullish.
 * @example api('series/') // https://api.bergflix.de/api/series/
 */
export const api = (p?: string) => (p ? base(`api/${p}`) : undefined);

/**
 * Returns the url mapping for a given media type.
 * @param type The media type.
 * @returns The url mapping for the given media type.
 * @example typeUrl('movie') // watch
 */
export const typeUrl = (type: MediaType, suffix?: string) => {
	const mapping = {
		movie: 'watch',
		series: 'details',
		episode: 'watch',
		collection: 'collection'
	};

	return mapping[type] + (suffix ? `/${suffix}` : '');
};
