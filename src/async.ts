
export const resolve = <T> (value: T): Promise<T> => Promise.resolve(value);

export const reject = <T> (value: T): Promise<T> => Promise.reject(value);

export const delay = <R> (time: number, result?: R): Promise<R|undefined> =>
	new Promise((done) => setTimeout(() => done(result), time));
