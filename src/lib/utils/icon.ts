export const iconpack = (name: string) => {
	if (!name) return '';
	return name.includes(':') ? name : `mingcute:${name}`;
};
