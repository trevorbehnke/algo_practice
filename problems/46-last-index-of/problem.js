/**
 * Last Index Of
 *
 * Given an array and a target value, return the LAST index where
 * the target appears. If the target is not found, return -1.
 *
 * Examples:
 *   lastIndexOf([1, 2, 3, 2, 1], 2)    => 3
 *   lastIndexOf([1, 2, 3, 2, 1], 1)    => 4
 *   lastIndexOf([1, 2, 3], 5)          => -1
 *   lastIndexOf(["a", "b", "a"], "a")  => 2
 *   lastIndexOf([], 1)                 => -1
 *
 * Hint: Loop through the array from the END to the BEGINNING.
 *       When you find a match, return that index immediately.
 *       If the loop finishes without finding anything, return -1.
 *
 * Pattern: Reverse traversal with early return.
 */

function lastIndexOf(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}

module.exports = lastIndexOf;
