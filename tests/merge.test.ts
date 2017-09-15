
import * as test from 'tape';

import { merge } from '../src/merge';

test('merge', (t) => {
	t.deepEqual(merge({ a: 1, c: 3 }, { b: 2, c: 4 }), { a: 1, b: 2, c: 4 });
	t.deepEqual(merge({ a: 1}, { b: 2 }, { c: 3 }), { a: 1, b: 2, c: 3 });
	t.end();
});
