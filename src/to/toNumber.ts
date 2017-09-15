
import { isNaN, isString, isNumber, isFinite } from '../is';

const FLOAT_NUMBER_TEST_REXP = /\.[0-9]+$/;

export const toNumber = (value: any, finiteOnly: boolean = true): number => {
	if (isNumber(value, false)) {
		return finiteOnly ? (isFinite(value) ? value : 0) : value;
	}

	if (isString(value) && FLOAT_NUMBER_TEST_REXP.test(value)) {
		const newFloatValue = parseFloat(value);
		if (!isNaN(newFloatValue)) {
			return newFloatValue;
		}
	}

	const newValue = parseInt(value, 10);
	return isNaN(newValue) ? 0 : newValue;
};
