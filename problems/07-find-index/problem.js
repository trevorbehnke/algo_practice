/**
 * Find Index
 *
 * Given an array and a target value, return the index of the first occurrence
 * of that value. If the value is not found, return -1.
 *
 * Examples:
 *   findIndex([10, 20, 30, 40], 30)   => 2
 *   findIndex(["a", "b", "c"], "b")   => 1
 *   findIndex([1, 2, 3], 99)          => -1
 *   findIndex([], 5)                  => -1
 *
 * Constraints:
 *   - Do NOT use Array.indexOf() or Array.findIndex().
 *
 * Pattern: Early return (same as palindrome).
 */

function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1
}

module.exports = findIndex;
