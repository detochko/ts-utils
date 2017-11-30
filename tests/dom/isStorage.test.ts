
import * as test from 'tape';

import { nulls } from '../mocks/nulls';

import { isStorage } from '../../src/dom/isStorage';

test('isStorage', (t) => {

	nulls((item) => t.false(isStorage(item)));

	t.end();
});
