/**
 * Pair Sum
 *
 * Given an array of numbers and a target sum, return true if ANY two
 * different elements in the array add up to the target.
 *
 * Examples:
 *   pairSum([1, 2, 3, 4], 5)     => true   (1 + 4, or 2 + 3)
 *   pairSum([1, 2, 3, 4], 10)    => false
 *   pairSum([5, 5], 10)          => true
 *   pairSum([1], 2)              => false
 *   pairSum([], 0)               => false
 *
 * Hint: This is a simplified version of Two Sum (problem 05).
 *       Instead of returning indices, just return true/false.
 *       Use a "seen" object to track numbers you've already visited.
 *
 * Pattern: Hash map lookup (same as two sum).
 */

function pairSum(arr, target) {
  let seen = {}
  for (i = 0; i < arr.length; i++) {
    let complement = target - arr[i]
    if (seen[complement] !== undefined) {
      return true
    } else {
      seen[arr[i]] = i
    }

  }
  return false
}

pairSum([1, 2, 3, 4], 5)
// pairSum([1, 2, 3, 4], 10)
// pairSum([5, 5], 10)
// pairSum([1], 2)
// pairSum([], 0)

module.exports = pairSum;
