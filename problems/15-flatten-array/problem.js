/**
 * Flatten Array
 *
 * Given a nested array (only one level deep), return a flat array with
 * all elements in order.
 *
 * Examples:
 *   flatten([[1, 2], [3, 4], [5]])       => [1, 2, 3, 4, 5]
 *   flatten([[1], [2], [3]])             => [1, 2, 3]
 *   flatten([["a", "b"], ["c"]])         => ["a", "b", "c"]
 *   flatten([])                          => []
 *   flatten([[1, 2, 3]])                 => [1, 2, 3]
 *
 * Constraints:
 *   - Do NOT use Array.flat() or Array.concat().
 *   - The input is only nested one level deep (no arrays inside arrays inside arrays).
 *
 * Hint: You'll need a nested loop — an outer loop for each sub-array,
 *       and an inner loop for each element within that sub-array.
 *
 * Pattern: Build and return + nested loops.
 */

function flatten(arr) {
  let results = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      results.push(arr[i][j])
    }
  }
  return results
}

flatten([[1, 2], [3, 4], [5]])
// flatten([[1], [2], [3]])
// flatten([["a", "b"], ["c"]])
// flatten([])
// flatten([[1, 2, 3]])

module.exports = flatten;
