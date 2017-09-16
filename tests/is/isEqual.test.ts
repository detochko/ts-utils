
import * as test from 'tape';

import { isEqual } from '../../src/is';

const a1 = {a: 1};
const a2 = {a: 1};

const a3 = {a: 1, b: {a: 2}};
const a4 = {a: 1, b: {a: 2}};

const b1 = {b: 2};
const b2 = {b: 2};

const c1 = [1, 2];
const c2 = [1, 2];
const c3 = [1, 2, [1, 2]];
const c4 = [1, 2, [1, 2]];

test('isEqual:true', (t) => {
	t.true(isEqual(a1, a2));
	t.true(isEqual(a1, a1));
	t.true(isEqual(b1, b2));
	t.true(isEqual(b1, b1));
	t.true(isEqual(c1, c2));
	t.true(isEqual(c1, c1));
	t.end();
});

test('isEqual:deep:true', (t) => {
	t.true(isEqual(a1, a2, true));
	t.true(isEqual(a1, a1, true));
	t.true(isEqual(b1, b2, true));
	t.true(isEqual(b1, b1, true));
	t.true(isEqual(c1, c2, true));
	t.true(isEqual(c1, c1, true));

	t.true(isEqual(a3, a4, true));
	t.true(isEqual(c3, c4, true));
	t.end();
});

test('isEqual:false', (t) => {
	t.false(isEqual([1], [2]));
	t.false(isEqual({a: 1}, {b: 1}));

	t.false(isEqual({a: 1, b: {a: 4}}, {a: 1, b: {a: 5}}));

	t.false(isEqual(a3, a4));
	t.false(isEqual(c3, c4));
	t.end();
});

test('isEqual:deep:false', (t) => {
	t.false(isEqual([1], [2], true));
	t.false(isEqual({a: 1, b: {a: 1}}, {a: 1, b: {a: 2}}, true));
	t.end();
});
