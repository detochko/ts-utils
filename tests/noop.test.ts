
import * as test from 'tape';

import { isFunction } from '../src/is';
import { noop } from '../src/noop';

test('noop', (t) => {
	t.true(isFunction(noop));
	t.true(undefined === noop());
	t.true(undefined === noop(1, 2, 3));
	t.end();
});

test('noop:false', (t) => {
	t.false(!!noop());
	t.end();
});
