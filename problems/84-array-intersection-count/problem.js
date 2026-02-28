/**
 * Array Intersection Count
 *
 * Given two arrays, return the number of elements they have in common.
 * Each element should only be counted once even if it appears multiple
 * times in both arrays.
 *
 * Examples:
 *   intersectionCount([1, 2, 3], [2, 3, 4])          => 2  (2 and 3)
 *   intersectionCount([1, 1, 2, 2], [2, 2, 3, 3])    => 1  (just 2)
 *   intersectionCount([1, 2, 3], [4, 5, 6])          => 0
 *   intersectionCount([], [1, 2])                    => 0
 *   intersectionCount([1, 2, 3], [1, 2, 3])          => 3
 *
 * Hint: Build a Set from the first array. Loop through the second
 *       array. For each element, if it's in the Set AND you haven't
 *       counted it already, increment the count.
 *       Use a second Set to track what you've already counted.
 *
 * Pattern: Set lookup and counting (builds on intersection, problem 17).
 */

function intersectionCount(arr1, arr2) {
  // Your code here
}

module.exports = intersectionCount;
