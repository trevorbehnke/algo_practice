/**
 * Is Sorted
 *
 * Given an array of numbers, return true if the array is sorted in
 * ascending order (each element is <= the next one).
 *
 * Examples:
 *   isSorted([1, 2, 3, 4])     => true
 *   isSorted([1, 3, 2, 4])     => false
 *   isSorted([1, 1, 2, 2])     => true  (equal neighbors are fine)
 *   isSorted([5])              => true
 *   isSorted([])               => true
 *
 * Hint: Compare each element to the one right after it. If you ever find
 *       one that's bigger than its neighbor, you know it's not sorted.
 *
 * Pattern: Early return on failure (like palindrome / find index).
 */

// SOLUTION 1
// function isSorted(arr) {
//   let result = []
//   let answer = true
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] <= arr[i + 1]) {
//       result.push(true)
//     } else {
//       return false
//     }
//   }
//   for (let j = 0; j < result.length; j++) {
//     if (result.every(val => val === true)) {
//       answer = true
//     }
//   }
//   return answer;

// }

// SOLUTION 2
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}

// isSorted([1, 2, 3, 4])
isSorted([1, 3, 2, 4])
// isSorted([1, 1, 2, 2])
// isSorted([5])
// isSorted([])

module.exports = isSorted;
