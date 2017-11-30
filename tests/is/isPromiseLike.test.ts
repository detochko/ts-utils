
import * as test from 'tape';

import { nulls } from '../mocks/nulls';

import { noop } from '../../src/noop';
import { isPromiseLike } from '../../src/is/isPromiseLike';

test('isPromiseLike:true', (t) => {
	t.true(isPromiseLike(Promise.all([])));
	t.true(isPromiseLike(Promise.resolve()));
	t.true(isPromiseLike(new Promise(noop)));
	t.end();
});

test('isPromiseLike:false', (t) => {
	t.false(isPromiseLike([]));
	t.false(isPromiseLike({}));
	t.false(isPromiseLike(1));
	t.false(isPromiseLike(new Error('Error')));
	t.false(isPromiseLike(noop));

	nulls((item) => t.false(isPromiseLike(item)));

	t.end();
});
