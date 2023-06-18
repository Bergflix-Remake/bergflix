import { t } from '$lib/translations';

export const title = (title?: string) =>
	t.get('common.title', { title, site: t.get('common.name') });
