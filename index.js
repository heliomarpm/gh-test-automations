// index.js
/**
 * Soma dois números.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
  return a + b;
}

/**
 * Multiplica dois números.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Divisor cannot be zero.");
  }
  return a / b;
}

module.exports = { sum, multiply, divide };