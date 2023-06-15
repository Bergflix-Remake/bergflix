import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'de',
			loader: async () => (await import('./lang/de/common.json')).default,
			key: 'common'
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
