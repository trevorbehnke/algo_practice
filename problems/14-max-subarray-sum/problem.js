/**
 * Max Subarray Sum
 *
 * Given an array of numbers and a number n, find the maximum sum of
 * n consecutive elements in the array.
 *
 * Examples:
 *   maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)  => 10  (because 2 + 8 = 10)
 *   maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)  => 17  (because 5 + 2 + 8 + 1 = 16... wait, 2 + 5 + 2 + 8 = 17)
 *   maxSubarraySum([4, 2, 1, 6], 1)            => 6
 *   maxSubarraySum([], 2)                      => null
 *
 * Constraints:
 *   - Return null if the array is shorter than n.
 *
 * Hint: The brute force way is to use a nested loop — for each starting
 *       position, sum up n elements and track the max. That's totally fine
 *       for now! (There's a faster "sliding window" approach, but don't
 *       worry about it yet.)
 *
 * Pattern: Track and update (like find max) + nested loop.
 */

function maxSubarraySum(arr, n) {
  let result = 0
  if (arr.length < n) {
    return null
  }
  for (let i = 0; i <= arr.length - n; i++) {
    let sum = 0
    for (let j = 0; j < n; j++) {
      sum += arr[i + j]
    }
    if (sum > result) {
      result = sum
    }
  }
  return result
}

maxSubarraySum([1, 2, 3, 9, 8, 1, 5], 2)

module.exports = maxSubarraySum;
