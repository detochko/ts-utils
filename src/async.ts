
/**
 * @param {any} value
 * @returns {Promise<any>}
 */
export const resolve = <T> (value: T): Promise<T> => Promise.resolve(value);

/**
 * @param {any} value
 * @returns {Promise<never>}
 */
export const reject = <T> (value: T): Promise<T> => Promise.reject(value);

/**
 * @param {number} time
 * @param {any} [result]
 * @returns {Promise<any>}
 */
export const delay = <R> (time: number, result?: R): Promise<R|undefined> =>
	new Promise((done) => setTimeout(() => done(result), time));
