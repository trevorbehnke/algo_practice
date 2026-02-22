/**
 * Sum Nested
 *
 * Given a nested array of numbers (can be any depth), return the sum of
 * all numbers in the entire structure.
 *
 * Examples:
 *   sumNested([1, 2, 3])                  => 6
 *   sumNested([1, [2, 3]])                => 6
 *   sumNested([1, [2, [3, [4]]]])         => 10
 *   sumNested([[[[5]]]])                  => 5
 *   sumNested([])                         => 0
 *
 * Hint: This is another recursion problem! For each element:
 *       - If it's a number, add it to your sum.
 *       - If it's an array, call sumNested on that array and add the result.
 *       Array.isArray(val) tells you if something is an array.
 *
 * Pattern: Recursion — same idea as deepEqual but simpler.
 */

function sumNested(arr) {
  // Your code here
}

module.exports = sumNested;
