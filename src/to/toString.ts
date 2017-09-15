
import { isString, isNumber } from '../is';

export const toString = (value: any): string => {

	switch (true) {
		case isString(value):
			return value;
		case isNumber(value):
			return String(value);
	}

	return '';
};
