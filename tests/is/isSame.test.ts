
import * as test from 'tape';

import { nulls } from '../mocks/nulls';
import { isSame, isSamePolyfill } from '../../src/is';

const trueTest = (isSameFunc: typeof isSame, t: any) => {
	t.true(isSameFunc(true, true));
	t.true(isSameFunc(false, false));
	t.true(isSameFunc('', ''));
	t.true(isSameFunc('a', 'a'));
	t.true(isSameFunc(1, 1));
	t.true(isSameFunc(-1, -1));

	nulls((item) => t.true(isSameFunc(item, item)));

	const a = [1, 2];
	t.true(isSameFunc(a, a));

	const b = {a: 1, b: 2};
	t.true(isSameFunc(b, b));
};

const falseTest =  (isSameFunc: typeof isSame, t: any) => {
	t.false(isSameFunc(undefined, null));
	t.false(isSameFunc(false, true));
	t.false(isSameFunc('a', 'b'));
	t.false(isSameFunc(0, -0));
	t.false(isSameFunc(-0, 0));
	t.false(isSameFunc(Infinity, -Infinity));
	t.false(isSameFunc(-Infinity, Infinity));

	const a = [1, 2];
	t.false(isSameFunc(a, [1, 2]));

	const b = {a: 1, b: 2};
	t.false(isSameFunc(b, {a: 1, b: 2}));
};

test('isSame:true', (t) => {
	trueTest(isSame, t);
	trueTest(isSamePolyfill, t);
	t.end();
});

test('isSame:false', (t) => {
	falseTest(isSame, t);
	falseTest(isSamePolyfill, t);
	t.end();
});
