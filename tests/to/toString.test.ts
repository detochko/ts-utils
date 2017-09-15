
import * as test from 'tape';

import { toString } from '../../src/to';

test('toString:string', (t) => {
	t.equal(toString(''), '');
	t.equal(toString(' 123 '), ' 123 ');
	t.equal(toString('123 '), '123 ');
	t.equal(toString(' 123'), ' 123');
	t.end();
});

test('toString:numbers', (t) => {
	t.equal(toString(0), '0');
	t.equal(toString(1), '1');
	t.equal(toString(-1), '-1');
	t.equal(toString(Infinity), '');
	t.equal(toString(-Infinity), '');
	t.equal(toString(NaN), '');
	t.equal(toString(123), '123');
	t.equal(toString(1.23), '1.23');
	t.end();
});

test('toString:other', (t) => {
	t.equal(toString([]), '');
	t.equal(toString([1, 2, 3]), '');

	t.equal(toString({}), '');
	t.equal(toString({a: 1, b: 2, c: 3}), '');

	t.equal(toString(undefined), '');
	t.equal(toString(null), '');
	t.equal(toString(new Error('Error')), '');
	t.end();
});
