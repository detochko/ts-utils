
let cache: Window|null|undefined;

/**
 * @returns {Window|undefined}
 */
export const getWindow = (): Window|undefined => {
	if (undefined === cache) {
		cache = typeof window !== 'undefined' ? window : null;
	}
	return cache || undefined;
};
