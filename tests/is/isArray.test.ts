
import * as test from 'tape';

import { isArray } from '../../src/is';

test('isArray:true', (t) => {
	t.true(isArray([]));
	t.true(isArray([1, 2, 3]));
	t.true(isArray(new Array()));
	t.true(isArray(new Array([])));
	t.true(isArray(Array()));
	t.true(isArray(Array([])));
	t.true(isArray(new Array(3, 4, 5)));
	t.true(isArray(new Array([3, 4, 5])));
	t.true(isArray([1, '2', 3]));
	t.end();
});

test('isArray:false', (t) => {
	t.false(isArray({}));
	t.false(isArray('1'));
	t.false(isArray(1));
	t.false(isArray(new Error('Error')));
	t.false(isArray(NaN));
	t.false(isArray(undefined));
	t.false(isArray(null));
	t.end();
});
