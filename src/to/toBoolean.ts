
import { isBoolean, isString } from '../is';

import { toLowerCase } from './toLowerCase';

/**
 * @param {any} value
 * @param {boolean} [spec] = false
 * @returns {boolean}
 */
export const toBoolean = (value: any, spec: boolean = false): boolean => {
	if (isBoolean(value)) {
		return value;
	}

	if (spec && isString(value)) {
		switch (toLowerCase(value).trim()) {
			case 'on':
			case 'yes':
			case 'ok':
				return true;
			case 'off':
			case 'no':
				return false;
		}
	}

	return Boolean(value);
};
