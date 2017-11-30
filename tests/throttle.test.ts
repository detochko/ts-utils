
import * as test from 'tape';

import { isFunction } from '../src/is';
import { throttle } from '../src/throttle';

test('throttle', (t) => {

	const func = (value: number): number => value;

	t.true(func !== throttle(func, 500));

	t.true(isFunction(func));
	t.true(isFunction(throttle(func, 500)));

	t.end();
});
