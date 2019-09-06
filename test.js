import test from 'ava';
import m from './';

test('it is a 2d array', t => {
	t.is(m(Array(4).fill(Array(1))), true);
	t.is(m([['1', '2'], ['3', '4']]), true);
	t.is(m([['1'], ['2'], ['3'], ['4']]), true);
	t.is(m([['1', '2'], ['3']]), true);
});

test('it is not a 2d array', t => {
	t.is(m(Array(3)), false);
	t.is(m('1'), false);
	t.is(m(2), false);
	t.is(m(NaN), false);
	t.is(m({}), false);
	t.is(m(Object.create(null)), false);
	t.is(m(['1', '2', '3', '4']), false);
	t.is(m([['1', '2'], '3', '4']), false);
	t.is(m(null), false);
	t.is(m(undefined), false);
});
