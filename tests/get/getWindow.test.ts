
import * as test from 'tape';

import { getWindow } from '../../src/get';

test('getWindow', (t) => {
	t.equal(getWindow(), typeof window === 'undefined' ? null : window);
	t.end();
});
