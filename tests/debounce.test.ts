
import * as test from 'tape';

import { isFunction } from '../src/is';
import { debounce } from '../src/debounce';

test('debounce', (t) => {

	const func = (value: number): number => value;

	t.true(func !== debounce(func, 500));

	t.true(isFunction(func));
	t.true(isFunction(debounce(func, 500)));

	t.end();
});
