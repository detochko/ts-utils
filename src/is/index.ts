
// tslint:disable:no-var-requires variable-name
const _isBoolean = require('lodash/isBoolean');
const _isNumber = require('lodash/isNumber');
const _isString = require('lodash/isString');
const _isArray = require('lodash/isArray');
const isNaN = require('lodash/isNaN');
const isFinite = require('lodash/isFinite');
const isFunction = require('lodash/isFunction');
// tslint:enable:no-var-requires variable-name

export { isNaN, isFinite, isFunction };

const EMAIL_SIMPLE_TEST__REXP = /[^@]+@[^@]+/;

export const isArray = <T = any>(value: any): value is T[] => _isArray(value);

export const isBoolean = (value: any): value is boolean => _isBoolean(value);

export const isEmailSimple = (email: string): boolean => EMAIL_SIMPLE_TEST__REXP.test(email);

export const isEmptyString = (value: string, trim: boolean = true): boolean => '' === (trim ? value.trim() : value);

export const isNonEmptyArray = <T = any>(value: any): value is T[] => isArray(value) && 0 < value.length;

export const isNumber = (value: any, finiteOnly: boolean = true): value is number =>
	_isNumber(value) && !isNaN(value) && (finiteOnly ? isFinite(value) : true);

export const isString = (value: any): value is string => _isString(value);

export const isStorage = (storage: any): storage is Storage =>
	storage && storage.setItem && storage.getItem && storage.removeItem && true;
