/**
 * Array Equals
 *
 * Given two arrays, return true if they have the same elements in the
 * same order. Use strict equality (===) for comparison.
 *
 * Examples:
 *   arrayEquals([1, 2, 3], [1, 2, 3])       => true
 *   arrayEquals([1, 2, 3], [1, 2, 4])       => false
 *   arrayEquals([1, 2], [1, 2, 3])          => false
 *   arrayEquals([], [])                     => true
 *   arrayEquals(["a", "b"], ["a", "b"])     => true
 *
 * Hint: First check if the lengths are different — if so, return false
 *       immediately. Then loop through and compare each element.
 *       If any differ, return false. If the loop finishes, return true.
 *
 * Pattern: Early return on failure (element-by-element comparison).
 */

function arrayEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

arrayEquals([1, 2, 3], [1, 2, 3])       // => true
arrayEquals([1, 2, 3], [1, 2, 4])       // => false
arrayEquals([1, 2], [1, 2, 3])          // => false
arrayEquals([], [])                     // => true
arrayEquals(["a", "b"], ["a", "b"])     // => true

module.exports = arrayEquals;
