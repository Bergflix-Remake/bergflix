import { t } from '$lib/translations';

export const navItems = [
	{ name: t.get('common.navbar.home'), href: '/', icon: 'home-4-fill' },
	{
		name: t.get('common.mediaTypes.movie.plural'),
		href: '/videos',
		icon: 'icon-park-outline:video'
	},
	{
		name: t.get('common.mediaTypes.collection.plural'),
		href: '/collections',
		icon: 'folder-open-fill'
	}
];
