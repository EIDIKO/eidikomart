// index.test.js
const sum1 = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum1(1, 2)).toBe(3);

});


test('adds 1 + 1 to equal 2', () => {
  expect(sum1(1, 1)).toBe(2);
});


test('adds 0 + 0 to equal Zero', () => {
  expect(sum1(0, 0)).toBe(0);
});
