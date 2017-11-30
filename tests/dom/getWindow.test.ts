
import * as test from 'tape';

import { getWindow } from '../../src/dom/getWindow';

test('getWindow', (t) => {
	t.equal(getWindow(), typeof window === 'undefined' ? undefined : window);
	t.end();
});
