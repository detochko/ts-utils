
let cache: Window|null|undefined;

export const getWindow = (): Window|null => {
	if (undefined === cache) {
		cache = typeof window !== 'undefined' ? window : null;
	}
	return cache;
};
