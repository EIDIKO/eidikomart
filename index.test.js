// index.test.js
//const sum1 = require('./index');

import sum from './index';


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);

});

test('adds 1 + 1 to equal 2', () => {
  expect(sum(1, 1)).toBe(2);
});


test('adds 0 + 0 to equal Zero', () => {
  expect(sum(0, 0)).toBe(0);
});

test('sub 0 + 0 to equal Zero', () => {
  expect(sum(0, 0)).toBe(0);
});
