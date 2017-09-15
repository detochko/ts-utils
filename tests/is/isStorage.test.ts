
import * as test from 'tape';

import { isStorage } from '../../src/is';

test('isStorage', (t) => {
	t.false(isStorage(null));
	t.false(isStorage(undefined));
	t.end();
});
