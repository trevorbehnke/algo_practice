/**
 * Recursive Includes
 *
 * Given an array and a target value, return true if the target exists
 * in the array. Use RECURSION (no loops, no .includes()).
 *
 * Another recursion rep — same base-case / recursive-case structure
 * as problems 78 and 85.
 *
 * Examples:
 *   recursiveIncludes([1, 2, 3], 2)       => true
 *   recursiveIncludes([1, 2, 3], 5)       => false
 *   recursiveIncludes(["a", "b"], "b")    => true
 *   recursiveIncludes([], 1)              => false
 *
 * Hint:
 *   1. Base case: empty array → return false (didn't find it)
 *   2. Check: if arr[0] === target → return true (found it!)
 *   3. Recursive case: search the rest — recursiveIncludes(arr.slice(1), target)
 *
 * Pattern: Recursion — check first element, recurse on the rest.
 */

function recursiveIncludes(arr, target) {
  if (arr.length === 0) return false
  if (arr[0] === target) return true
  return recursiveIncludes(arr.slice(1), target)
}

recursiveIncludes([1, 2, 3], 2)       //=> true
recursiveIncludes([1, 2, 3], 5)       //=> false
recursiveIncludes(["a", "b"], "b")    //=> true
recursiveIncludes([], 1)              //=> false

module.exports = recursiveIncludes;
