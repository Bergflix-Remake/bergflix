import { loadTranslations, locale } from '$lib/translations';
import type { LayoutLoad } from './$types';

export const load = (async ({ url }) => {
	const { pathname } = url;
	const defauldLocale = 'de';
	const initLocale = locale.get() || defauldLocale;
	await loadTranslations(initLocale);
	return {};
}) satisfies LayoutLoad;
