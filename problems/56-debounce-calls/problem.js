/**
 * Count Consecutive Duplicates
 *
 * Given an array, return the number of times an element is the same
 * as the one right before it (consecutive duplicates).
 *
 * Examples:
 *   countConsecutiveDups([1, 1, 2, 3, 3, 3])     => 3
 *   countConsecutiveDups([1, 2, 3])               => 0
 *   countConsecutiveDups([5, 5, 5, 5])            => 3
 *   countConsecutiveDups(["a", "a", "b", "b"])    => 2
 *   countConsecutiveDups([1])                     => 0
 *   countConsecutiveDups([])                      => 0
 *
 * Hint: Loop starting at index 1. Compare each element to the one
 *       before it (arr[i] === arr[i-1]). If they match, increment
 *       a counter.
 *
 * Pattern: Adjacent comparison with counter.
 */

function countConsecutiveDups(arr) {
  let result = 0
  arr.forEach((el, i) => {
    if (arr[i] === arr[i + 1]) result++
  })
  return result
}

countConsecutiveDups([1, 1, 2, 3, 3, 3])      // => 3
countConsecutiveDups([1, 2, 3])               // => 0
countConsecutiveDups([5, 5, 5, 5])            // => 3
countConsecutiveDups(["a", "a", "b", "b"])    // => 2
countConsecutiveDups([1])                     // => 0
countConsecutiveDups([])                      // => 0

module.exports = countConsecutiveDups;
