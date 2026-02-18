/**
 * Find Max
 *
 * Given an array of numbers, return the largest number in the array.
 *
 * Examples:
 *   findMax([1, 5, 3, 9, 2])  => 9
 *   findMax([-1, -5, -3])     => -1
 *   findMax([42])             => 42
 *
 * Constraints:
 *   - Do NOT use Math.max() or any built-in max function.
 *   - The array will always have at least one element.
 */

function findMax(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

console.log(findMax([1, 5, 3, 9, 2]))

module.exports = findMax;
