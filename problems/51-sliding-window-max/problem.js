/**
 * Sliding Window Max
 *
 * Given an array of numbers and a window size k, find the maximum
 * sum of any k consecutive elements.
 *
 * Examples:
 *   maxWindowSum([1, 3, 2, 5, 1, 1, 6], 3)  => 12  (5 + 1 + 1 + 6? No — wait: [2,5,1]=8, [5,1,1]=7, [1,1,6]=8... actually [1,3,2]=6,[3,2,5]=10,[2,5,1]=8,[5,1,1]=7,[1,1,6]=8 => 10)
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

function maxWindowSum(arr, k) {
  // Your code here
}

module.exports = maxWindowSum;
