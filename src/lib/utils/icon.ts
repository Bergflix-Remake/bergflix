/**
 * Checks for iconpack prefix and adds it if missing.
 * @param name icon name, with or without iconpack prefix
 * @param iconpack iconpack name, defaults to `mingcute`
 * @returns `''` if name is nullish, otherwise the icon name with iconpack prefix
 */
export const iconpack = (name: string, iconpack?: string) => {
	if (!name) return '';
	return name.includes(':') ? name : `${iconpack || 'mingcute'}:${name}`;
};
