/**
 * Recursive Sum
 *
 * Given an array of numbers, return the sum using RECURSION (no loops).
 *
 * You solved this with a loop in problem 6. Now try it recursively.
 * This is a gentle re-introduction to recursion.
 *
 * Examples:
 *   recursiveSum([1, 2, 3, 4])  => 10
 *   recursiveSum([5])           => 5
 *   recursiveSum([])            => 0
 *
 * Hint: Every recursive function needs:
 *   1. A BASE CASE: when to stop (empty array → return 0)
 *   2. A RECURSIVE CASE: break the problem into a smaller piece
 *
 *   The idea: the sum of [1, 2, 3, 4] is:
 *     1 + sum of [2, 3, 4]
 *     which is 2 + sum of [3, 4]
 *     which is 3 + sum of [4]
 *     which is 4 + sum of []
 *     which is 0 ← base case!
 *
 *   So: return arr[0] + recursiveSum(arr.slice(1))
 *
 * Pattern: Recursion — first element + recurse on the rest.
 */

function recursiveSum(arr) {
  if (arr.length === 0) return 0
  return arr[0] + recursiveSum(arr.slice(1))
}

recursiveSum([1, 2, 3, 4])  // => 10
recursiveSum([5])           // => 5
recursiveSum([])            // => 0

module.exports = recursiveSum;
