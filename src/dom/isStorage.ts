
/**
 * @param {Storage} storage
 * @returns {boolean}
 */
export const isStorage = (storage: any): storage is Storage =>
	storage && storage.setItem && storage.getItem && storage.removeItem && true;
