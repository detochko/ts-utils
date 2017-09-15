
import * as test from 'tape';

import { isEmailSimple } from '../../src/is';

test('isEmailSimple:true', (t) => {
	t.true(isEmailSimple('--@--'));
	t.true(isEmailSimple('h@h'));
	t.true(isEmailSimple('h@h.com'));
	t.end();
});

test('isEmailSimple:false', (t) => {
	t.false(isEmailSimple('----'));
	t.false(isEmailSimple('h.h.com'));
	t.end();
});
