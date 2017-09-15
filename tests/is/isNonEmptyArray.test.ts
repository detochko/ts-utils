
import * as test from 'tape';

import { isNonEmptyArray } from '../../src/is';

test('isNonEmptyArray:true', (t) => {
	t.true(isNonEmptyArray([1]));
	t.true(isNonEmptyArray([1, 2, 3]));
	t.true(isNonEmptyArray(['']));
	t.true(isNonEmptyArray([0]));
	t.true(isNonEmptyArray([undefined]));
	t.true(isNonEmptyArray([null]));
	t.true(isNonEmptyArray(new Array(1)));
	t.end();
});

test('isNonEmptyArray:false', (t) => {
	t.false(isNonEmptyArray([]));
	t.false(isNonEmptyArray({}));
	t.false(isNonEmptyArray({a: 1, b: 2, c: 3}));
	t.false(isNonEmptyArray(new Array()));
	t.end();
});
