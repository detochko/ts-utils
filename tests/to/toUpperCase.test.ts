
import * as test from 'tape';

import { toUpperCase } from '../../src/to';

test('toUpperCase', (t) => {
	t.equal(toUpperCase(''), '');
	t.equal(toUpperCase('abc'), 'ABC');
	t.equal(toUpperCase('ABC'), 'ABC');
	t.end();
});

test('toUpperCase:number', (t) => {
	t.equal(toUpperCase('123'), '123');
	t.equal(toUpperCase(123), '123');
	t.equal(toUpperCase(0), '0');
	t.equal(toUpperCase('0'), '0');
	t.end();
});
