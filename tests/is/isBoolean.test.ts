
import * as test from 'tape';

import { isBoolean } from '../../src/is';

test('isBoolean:true', (t) => {
	t.true(isBoolean(true));
	t.true(isBoolean(false));
	t.true(isBoolean(Boolean(true)));
	t.true(isBoolean(Boolean(false)));
	t.end();
});

test('isBoolean:false', (t) => {
	t.false(isBoolean([]));
	t.false(isBoolean({}));
	t.false(isBoolean('1'));
	t.false(isBoolean(1));
	t.false(isBoolean(new Error('Error')));
	t.false(isBoolean(NaN));
	t.false(isBoolean(undefined));
	t.false(isBoolean(null));
	t.end();
});
