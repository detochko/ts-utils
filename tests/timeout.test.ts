
import * as test from 'tape';

import { isPromiseLike } from '../src/is/isPromiseLike';
import { timeout } from '../src/timeout';
import { noop } from '../src/noop';

test('timeout', (t) => {

	const r = timeout(500, false);
	t.true(isPromiseLike(r));
	r.catch(noop);

	t.end();
});
