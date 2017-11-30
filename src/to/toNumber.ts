
import { isNaN, isString, isNumber, isFinite } from '../is';

const FLOAT_NUMBER_TEST_REG_EXP = /\.[0-9]+$/;

/**
 * @param {any} value
 * @param {boolean} [finiteOnly] = true
 * @returns {number}
 */
export const toNumber = (value: any, finiteOnly: boolean = true): number => {
	if (isNumber(value, false)) {
		return finiteOnly ? (isFinite(value) ? value : 0) : value;
	}

	if (isString(value) && FLOAT_NUMBER_TEST_REG_EXP.test(value)) {
		const newFloatValue = parseFloat(value);
		if (!isNaN(newFloatValue)) {
			return newFloatValue;
		}
	}

	const newValue = parseInt(value, 10);
	return isNaN(newValue) ? 0 : newValue;
};
