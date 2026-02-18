/**
 * Remove Duplicates
 *
 * Given an array, return a new array with all duplicate values removed.
 * Keep the first occurrence of each value. Preserve the original order.
 *
 * Examples:
 *   removeDuplicates([1, 2, 2, 3, 3, 3])   => [1, 2, 3]
 *   removeDuplicates(["a", "b", "a", "c"])  => ["a", "b", "c"]
 *   removeDuplicates([1])                   => [1]
 *   removeDuplicates([])                    => []
 *
 * Constraints:
 *   - Do NOT use Set or Array.filter().
 *
 * Hint: Use an object to track which values you've already seen (like two sum).
 *
 * Pattern: Hash map lookup + build and return.
 */

function removeDuplicates(arr) {
  let newArr = []
  let seen = {}
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true
      newArr.push(arr[i])
    }
  }
  return newArr
}

removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6])

module.exports = removeDuplicates;
