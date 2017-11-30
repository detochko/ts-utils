
import * as test from 'tape';

import { nulls } from './mocks/nulls';
import { hop } from '../src/hop';

const a = {a: 1, b: 2, c: 3};
const aHoc = hop.bind(a);

test('hoc', (t) => {
	t.true(aHoc('a'));
	t.true(aHoc('b'));
	t.true(aHoc('c'));
	t.end();
});

test('hoc:false', (t) => {
	t.false(aHoc('d'));
	t.false(aHoc());
	t.false(aHoc(1));
	t.false(aHoc(-1));

	nulls((item) => t.false(aHoc(item)));

	t.end();
});
