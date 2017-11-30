
import { isSame } from './isSame';
import { hop } from '../hop';

export interface IEqualObjectProp {
	[key: string]: any;
}

/**
 * @param {object} a
 * @param {object} b
 * @param {boolean} [deep] = false
 * @returns {boolean}
 */
export const isEqual = (a: IEqualObjectProp, b: IEqualObjectProp, deep: boolean = false): boolean => {

	if (isSame(a, b)) {
		return true;
	}

	if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
		return false;
	}

	if (a.prototype !== b.prototype) {
		return false;
	}

	const aKeys = Object.keys(a);
	const bKeys = Object.keys(b);

	if (aKeys.length !== bKeys.length) {
		return false;
	}

	const bHasOwnProperty = hop.bind(b);
	while (aKeys.length > 0) {
		const key = aKeys.pop();
		if (undefined === key) {
			return false;
		}

		if (!bHasOwnProperty(key)) {
			return false;
		}

		const aValue = a[key];
		const bValue = b[key];

		if (!isSame(aValue, bValue)) {
			if (!deep || typeof aValue !== 'object' || typeof bValue !== 'object' || aValue === null || bValue === null) {
				return false;
			}

			if (!isEqual(aValue, bValue, deep)) {
				return false;
			}
		}
	}

	return true;
};
