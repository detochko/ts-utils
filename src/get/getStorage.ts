
import { isStorage } from '../is';
import { getWindow } from './getWindow';

const cache: {[key: string]: Storage|null} = {};

export const getStorage = (storageName: 'localStorage'|'sessionStorage', check: boolean = true): Storage|null => {

	if (storageName in cache) {
		return cache[storageName];
	}

	const win = getWindow();

	if (
		win &&
		storageName in win &&
		win[storageName] &&
		isStorage(win[storageName])
	) {
		try {
			const storage: Storage = win[storageName];

			if (check) {
				const key = 'Test/Storage/' + Math.random();
				storage.setItem(key, key);
				if (key === storage.getItem(key)) {
					storage.removeItem(key);
					cache[storageName] = storage;
					return storage;
				} else {
					storage.removeItem(key);
				}
			} else {
				cache[storageName] = storage;
				return storage;
			}
		} catch {} // tslint:disable-line:no-empty
	}

	cache[storageName] = null;
	return null;
};
