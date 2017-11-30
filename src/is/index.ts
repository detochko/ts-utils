
export { isEqual } from './isEqual';
export { isSame, isSamePolyfill } from './isSame';
export { isPromiseLike } from './isPromiseLike';

// tslint:disable:no-var-requires variable-name
const _isBoolean = require('lodash/isBoolean');
const _isNumber = require('lodash/isNumber');
const _isString = require('lodash/isString');
const _isArray = require('lodash/isArray');
const isNaN = require('lodash/isNaN');
const isFinite = require('lodash/isFinite');
const isFunction = require('lodash/isFunction');
const isObject = require('lodash/isObjectLike');
// tslint:enable:no-var-requires variable-name

export { isNaN, isFinite, isFunction, isObject };

const EMAIL_SIMPLE_TEST__REGEXP = /[^@]+@[^@]+/;

/**
 * @param {any} value
 * @returns {boolean}
 */
export const isArray = <T = any>(value: any): value is T[] => _isArray(value);

/**
 * @param {any} value
 * @returns {boolean}
 */
export const isBoolean = (value: any): value is boolean => _isBoolean(value);

/**
 * @param {any} value
 * @returns {boolean}
 */
export const isEmptyString = (value: string, trim: boolean = true): boolean => '' === (trim ? value.trim() : value);

/**
 * @param {any} value
 * @returns {boolean}
 */
export const isNonEmptyArray = <T = any>(value: any): value is T[] => isArray(value) && 0 < value.length;

/**
 * @param {any} value
 * @param {boolean} [finiteOnly] = true
 * @returns {boolean}
 */
export const isNumber = (value: any, finiteOnly: boolean = true): value is number =>
	_isNumber(value) && !isNaN(value) && (finiteOnly ? isFinite(value) : true);

/**
 * @param {any} value
 * @returns {boolean}
 */
export const isString = (value: any): value is string => _isString(value);

/**
 * @param {any} value
 * @returns {boolean}
 */
export const isEmailSimple = (value: any): boolean =>
	isString(value) && EMAIL_SIMPLE_TEST__REGEXP.test(value);
