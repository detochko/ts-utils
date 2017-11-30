
/**
 * @param {any} value
 * @returns {boolean}
 */
export const isPromiseLike = <T = any> (value: any): value is Promise<T> => {
	return value && value.then && value.catch && true;
};
