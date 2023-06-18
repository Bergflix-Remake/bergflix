import i18n, { type Parser } from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'de',
			loader: async () => (await import('./lang/de/common.json')).default,
			key: 'common'
		},
		{
			locale: 'de',
			key: 'home',
			loader: async () => (await import('./lang/de/home.json')).default,
			routes: ['/', '']
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n<
	Parser.Params<Parser.Payload>
>(config);
