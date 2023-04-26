interface Flattenable<T> {
	data: {
		attributes: T;
	};
	[key: string]: unknown;
}

export function flatten<T>(data: Flattenable<T>): T {
	return data.data.attributes;
}
