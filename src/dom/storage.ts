
/**
 * @param {Storage} storage
 * @param {string} key
 * @returns {any}
 */
export const get = (storage: Storage, key: string): any => {
	if (storage) {
		try {
			return storage.getItem(key);
		} catch {} // tslint:disable-line:no-empty
	}
};

/**
 * @param {Storage} storage
 * @param {string} key
 * @param {any} value
 * @returns {boolean}
 */
export function set(storage: Storage, key: string, value: any): boolean {
	if (storage) {
		try {
			storage.setItem(key, value);
			return value === get(storage, key);
		} catch {} // tslint:disable-line:no-empty
	}

	return false;
}

/**
 * @param {Storage} storage
 * @param {string} key
 * @returns {boolean}
 */
export function clear(storage: Storage, key: string): boolean {
	if (storage) {
		try {
			storage.removeItem(key);
			return true;
		} catch {} // tslint:disable-line:no-empty
	}

	return false;
}
