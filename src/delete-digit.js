const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *a
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  const res = n
    .toString()
    .split('')
    .map((item, i) => {
      const a = n.toString().split('');
      a.splice(i, 1);
      return +a.join('');
    });
  return Math.max(...res);
}

module.exports = {
  deleteDigit,
};