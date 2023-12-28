// index.test.js

const {sum, sub} = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);

});


test('adds 1 + 1 to equal 2', () => {
  expect(sum(1, 1)).toBe(2);
});

test('subs 1 - 1 to equal 0', () => {
  expect(sub(1, 1)).toBe(0);
});


test('adds 0 + 0 to equal Zero', () => {
  expect(sum(0, 0)).toBe(0);
});
