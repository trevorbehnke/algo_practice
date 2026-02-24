/**
 * Binary Search
 *
 * Given a SORTED array of numbers and a target, return the index of
 * the target. If not found, return -1. You must use binary search
 * (not a simple loop through every element).
 *
 * Examples:
 *   binarySearch([1, 3, 5, 7, 9], 5)    => 2
 *   binarySearch([1, 3, 5, 7, 9], 6)    => -1
 *   binarySearch([2, 4, 6, 8, 10], 10)  => 4
 *   binarySearch([1], 1)                => 0
 *   binarySearch([], 5)                 => -1
 *
 * Hint: Binary search works by narrowing the search area in half each time:
 *   1. Set left = 0, right = arr.length - 1
 *   2. While left <= right:
 *      a. Find the middle index: mid = Math.floor((left + right) / 2)
 *      b. If arr[mid] === target, return mid
 *      c. If arr[mid] < target, search the right half: left = mid + 1
 *      d. If arr[mid] > target, search the left half: right = mid - 1
 *   3. If the loop ends, return -1
 *
 * Pattern: Divide and conquer (new pattern!).
 */

function binarySearch(arr, target) {
  // Your code here
}

module.exports = binarySearch;
