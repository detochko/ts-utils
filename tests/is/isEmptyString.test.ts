
import * as test from 'tape';

import { isEmptyString } from '../../src/is';

test('isEmptyString:true', (t) => {
	t.true(isEmptyString(''));
	t.true(isEmptyString(' '));
	t.end();
});

test('isEmptyString:true/trim', (t) => {
	t.true(isEmptyString('', false));
	t.true(isEmptyString('', true));
	t.true(isEmptyString(' ', true));
	t.end();
});

test('isEmptyString:false', (t) => {
	t.false(isEmptyString(' ', false));
	t.false(isEmptyString('1'));
	t.false(isEmptyString(' 1 '));
	t.end();
});
