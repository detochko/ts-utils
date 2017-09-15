
import * as test from 'tape';

import { isNumber } from '../../src/is';

test('isNumber:true', (t) => {
	t.true(isNumber(-1));
	t.true(isNumber(0));
	t.true(isNumber(-0));
	t.true(isNumber(1));
	t.true(isNumber(Number(-1)));
	t.true(isNumber(Number(0)));
	t.true(isNumber(Number(-0)));
	t.true(isNumber(Number(-1)));
	t.end();
});

test('isNumber:Infinity', (t) => {
	t.true(isNumber(Infinity, false));
	t.false(isNumber(Infinity));
	t.true(isNumber(-Infinity, false));
	t.false(isNumber(-Infinity));
	t.end();
});

test('isNumber:false', (t) => {
	t.false(isNumber({}));
	t.false(isNumber('1'));
	t.false(isNumber('-1'));
	t.false(isNumber('0'));
	t.false(isNumber('-0'));
	t.false(isNumber(''));
	t.false(isNumber(new Error('Error')));
	t.false(isNumber(NaN));
	t.false(isNumber(undefined));
	t.false(isNumber(null));
	t.end();
});
