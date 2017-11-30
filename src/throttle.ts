
// tslint:disable-next-line:no-var-requires variable-name
const _throttle = require('lodash/throttle');

export const throttle = <F extends (...args: any[]) => any>(
	func: F, wait?: number, options?: { leading?: boolean; trailing?: boolean; }
): F => _throttle(func, wait, options);
