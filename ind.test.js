import sub from './ind';


test('adds 1 - 2 to equal -1', () => {
  expect(sub(1, 2)).toBe(-1);

});

test('adds 1 - 1 to equal 0', () => {
  expect(sub(1, 1)).toBe(0);
});


test('adds 0 + 0 to equal Zero', () => {
  expect(sub(0, 0)).toBe(0);
});

test('sub 0 + 0 to equal Zero', () => {
  expect(sub(0, 0)).toBe(0);
});
