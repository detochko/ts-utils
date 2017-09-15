
import * as test from 'tape';

import { isString } from '../../src/is';

test('isString:true', (t) => {
	t.true(isString(''));
	t.true(isString(' '));
	t.true(isString('  123  '));
	t.true(isString(String(false)));
	t.end();
});

test('isString:false', (t) => {
	t.false(isString([]));
	t.false(isString({}));
	t.false(isString(1));
	t.false(isString(new Error('Error')));
	t.false(isString(NaN));
	t.false(isString(undefined));
	t.false(isString(null));
	t.end();
});
