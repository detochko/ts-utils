
export const get = (storage: Storage, key: string): any => {
	if (storage) {
		try {
			return storage.getItem(key);
		} catch {} // tslint:disable-line:no-empty
	}

	return null;
};

export function set(storage: Storage, key: string, value: any): boolean {
	if (storage) {
		try {
			storage.setItem(key, value);
			return true;
		} catch {} // tslint:disable-line:no-empty
	}

	return false;
}

export function clear(storage: Storage, key: string): boolean {
	if (storage) {
		try {
			storage.removeItem(key);
			return true;
		} catch {} // tslint:disable-line:no-empty
	}

	return false;
}
