
// tslint:disable-next-line:no-var-requires variable-name
const _debounce = require('lodash/debounce');

export const debounce = <F extends (...args: any[]) => any>(
	func: F, maxWait?: number, options?: { leading?: boolean; maxWait?: number; trailing?: boolean; }
): F => _debounce(func, maxWait, options);
