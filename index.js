// index.js
/**
 * Soma dois números.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
  if (a < 0) {
    return 0; // Exemplo de branch não coberto
  }
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

module.exports = { sum, multiply };