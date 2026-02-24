/**
 * Flatten Deep
 *
 * Given a nested array of ANY depth, return a flat array with all
 * values in order. This is like problem 15 (Flatten Array) but handles
 * any level of nesting.
 *
 * Examples:
 *   flattenDeep([1, [2, 3]])                  => [1, 2, 3]
 *   flattenDeep([1, [2, [3, [4]]]])           => [1, 2, 3, 4]
 *   flattenDeep([[[[1]]]])                    => [1]
 *   flattenDeep([1, 2, 3])                    => [1, 2, 3]
 *   flattenDeep([])                           => []
 *
 * Hint: This is very similar to Sum Nested (problem 26) — same recursive
 *       structure! Instead of adding numbers to a sum, push them to a
 *       result array. Instead of adding the recursive result, spread it
 *       into the result: result.push(...flattenDeep(arr[i]))
 *
 * Pattern: Recursion (same shape as sumNested).
 */

function flattenDeep(arr) {
  let result = []
  arr.forEach((val) => {
    if (Array.isArray(val)) {
      result.push(...flattenDeep(val))
    } else {
      result.push(val)
    }
  })
  return result
}

flattenDeep([1, [2, 3]])
flattenDeep([1, [2, [3, [4]]]])
flattenDeep([[[[1]]]])
flattenDeep([1, 2, 3])
flattenDeep([])

module.exports = flattenDeep;
