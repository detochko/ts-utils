
import * as test from 'tape';

import { toLowerCase } from '../../src/to';

test('toLowerCase', (t) => {
	t.equal(toLowerCase(''), '');
	t.equal(toLowerCase('abc'), 'abc');
	t.equal(toLowerCase('ABC'), 'abc');
	t.end();
});

test('toLowerCase:number', (t) => {
	t.equal(toLowerCase('123'), '123');
	t.equal(toLowerCase(123), '123');
	t.equal(toLowerCase(0), '0');
	t.equal(toLowerCase('0'), '0');
	t.end();
});
