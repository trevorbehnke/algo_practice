/**
 * Sliding Window Max
 *
 * Given an array of numbers and a window size k, find the maximum
 * sum of any k consecutive elements.
 *
 * Examples:
 *   maxWindowSum([1, 3, 2, 5, 1, 1, 6], 3)  => 10  (3 + 2 + 5)
 *   maxWindowSum([4, 2, 1, 7, 8, 1, 2], 2)  => 15  (7 + 8)
 *   maxWindowSum([1, 2, 3], 3)               => 6   (only one window)
 *   maxWindowSum([5], 1)                     => 5
 *
 * Hint: You already solved max-subarray-sum (problem 14) with nested
 *       loops. This time, try the SLIDING WINDOW approach:
 *       1. Calculate the sum of the first window (indices 0 to k-1)
 *       2. Slide the window: add the next element, subtract the element
 *          that fell off the left side
 *       3. Track the max sum as you go
 *       This avoids recalculating the entire sum each time.
 *
 * Pattern: Sliding window (new pattern!).
 */

// SOLUTION 1
// function maxWindowSum(arr, k) {
//   let maxSum = 0
//   for (let i = 0; i <= arr.length - k; i++) {
//     let localSum = arr.slice(i, i + k).reduce((acc, curr) => acc + curr, 0)
//     if (localSum > maxSum) {
//       maxSum = localSum
//     }
//   }
//   return maxSum
// }

// SOLUTION 2
function maxWindowSum(arr, k) {
  // Calculate sum of first window
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += arr[i]
  }
  // Slide the window; add next element and subtract previous element
  let maxSum = sum
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k]
    if (sum > maxSum) maxSum = sum
  }
  return maxSum
}

maxWindowSum([1, 3, 2, 5, 1, 1, 6], 3)  // => 10  (3 + 2 + 5)
maxWindowSum([4, 2, 1, 7, 8, 1, 2], 2)  // => 15  (7 + 8)
maxWindowSum([1, 2, 3], 3)              // => 6   (only one window)
maxWindowSum([5], 1)                    // => 5

module.exports = maxWindowSum;
