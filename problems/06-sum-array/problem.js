/**
 * Sum Array
 *
 * Given an array of numbers, return the sum of all elements.
 *
 * Examples:
 *   sumArray([1, 2, 3])       => 6
 *   sumArray([10, -5, 3])     => 8
 *   sumArray([])              => 0
 *   sumArray([7])             => 7
 *
 * Constraints:
 *   - Do NOT use Array.reduce() — use a loop.
 *
 * Pattern: Build and return (same as reverse string).
 */

// Solution 1
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

// Solution 2
// function sumArray(arr) {
//   let sum = 0;
//   arr.forEach((number, i) => {
//     sum += arr[i]
//   })
//   return sum
// }

module.exports = sumArray;
