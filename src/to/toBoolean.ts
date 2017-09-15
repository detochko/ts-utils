
import { isBoolean, isString } from '../is';

import { toLowerCase } from './toLowerCase';

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
