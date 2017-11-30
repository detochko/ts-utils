
import { noop } from './noop';

export const timeout = (time: number, error: any): Promise<never> =>
	new Promise((resolve, reject) => {
		noop(resolve);
		setTimeout(() => reject(error), time);
	});
