// index.test.js
const { sum, multiply } = require('./index');

describe('Math Operations', () => {
  test('sum() should correctly add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('multiply() should correctly multiply two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });
  
  // O teste de sum(-1, 1) está faltando para garantir 100% de cobertura de branch.
});