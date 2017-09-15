
import * as test from 'tape';

import { toUpperCase, toBoolean } from '../../src/to';

test('toBoolean', (t) => {
	t.equal(toBoolean(0), false);
	t.equal(toBoolean(-0), false);
	t.equal(toBoolean(1), true);
	t.equal(toBoolean(-1), true);
	t.equal(toBoolean(1.5), true);
	t.equal(toBoolean(-1.5), true);
	t.end();
});

test('toNumber:string', (t) => {

	['on', 'off', 'yes', 'no', 'ok']
	.forEach((value) => {
		t.equal(toBoolean(value), true);
		t.equal(toBoolean(toUpperCase(value)), true);
	});

	t.end();
});

test('toNumber:string/strict', (t) => {

	['on', 'yes', 'ok']
	.forEach((value) => {
		t.equal(toBoolean(value, true), true);
		t.equal(toBoolean(toUpperCase(value), true), true);
	});

	['off', 'no']
	.forEach((value) => {
		t.equal(toBoolean(value, true), false);
		t.equal(toBoolean(toUpperCase(value), true), false);
	});

	t.end();
});

test('toNumber:other/true', (t) => {
	t.equal(toBoolean([]), true);
	t.equal(toBoolean({}), true);
	t.equal(toBoolean(new Error('error')), true);
	t.end();
});

test('toNumber:other/false', (t) => {
	t.equal(toBoolean(null), false);
	t.equal(toBoolean(undefined), false);
	t.end();
});
