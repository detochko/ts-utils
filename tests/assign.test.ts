
import * as test from 'tape';

import { assign } from '../src/assign';

test('assign', (t) => {
	t.deepEqual(assign({ a: 1 }, { a: 2 }), { a: 2 });
	t.end();
});
