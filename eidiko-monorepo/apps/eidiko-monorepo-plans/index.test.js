// index.test.js
const {sum, sub} = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});



test('subs 1 - 1 to equal 0', () => {
  expect(sub(1, 1)).toBe(0);
});



