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

// SOLUTION 1
// function intersectionCount(arr1, arr2) {
//   arr1 = new Set(arr1)
//   arr2 = new Set(arr2)
//   let count = 0
//   for (val1 of arr1) {
//     for (val2 of arr2) {
//       if (val1 === val2) count++
//     }
//   }
//   return count
// }

// SOLUTION 2
function intersectionCount(arr1, arr2) {
  arr1 = new Set(arr1)
  arr2 = new Set(arr2)
  let count = 0
  for (val of arr1) {
    if (arr2.has(val)) count++
  }
  return count
}

// SOLUTION 3
// function intersectionCount(arr1, arr2) {
//   let set1 = new Set(arr1)
//   let counted = new Set()
//   let count = 0
//   for (let val of arr2) {
//     if (set1.has(val) && !counted.has(val)) {
//       count++
//       counted.add(val)
//     }
//   }
//   return count
// }

intersectionCount([1, 2, 3], [2, 3, 4])          // => 2(2 and 3)
intersectionCount([1, 1, 2, 2], [2, 2, 3, 3])    // => 1(just 2)
intersectionCount([1, 2, 3], [4, 5, 6])          // => 0
intersectionCount([], [1, 2])                    // => 0
intersectionCount([1, 2, 3], [1, 2, 3])          // => 3

module.exports = intersectionCount;
