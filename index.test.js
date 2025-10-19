const { sum, multiply } = require('./index');

describe('Math Operations', () => {
  test('sum() should correctly add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  // test('sum() should correctly add two negative numbers', () => {
  //   expect(sum(-1, -2)).toBe(-3);
  // });

  // test('multiply() should correctly multiply two numbers', () => {
  //   expect(multiply(3, 4)).toBe(12);
  // });
  
});