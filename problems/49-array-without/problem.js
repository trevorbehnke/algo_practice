/**
 * Array Without
 *
 * Given an array and one or more values to exclude, return a new array
 * with all instances of those values removed.
 *
 * Examples:
 *   without([1, 2, 3, 2, 1], 2)        => [1, 3, 1]
 *   without([1, 2, 3, 4, 5], 1, 3, 5)  => [2, 4]
 *   without(["a", "b", "c"], "b")      => ["a", "c"]
 *   without([1, 2, 3], 4)              => [1, 2, 3]
 *   without([], 1)                     => []
 *
 * Hint: Use ...rest parameters to collect the values to exclude:
 *       function without(arr, ...exclude)
 *       Then loop through arr, keeping elements that are NOT in exclude.
 *       You can check with exclude.includes(element).
 *
 * Pattern: Filter with rest parameters.
 */

function without(arr, ...exclude) {
  let result = []
  arr.forEach((val) => {
    if (!exclude.includes(val)) {
      result.push(val)
    }
  })
  return result
}

without([1, 2, 3, 2, 1], 2)        // => [1, 3, 1]
without([1, 2, 3, 4, 5], 1, 3, 5)  // => [2, 4]
without(["a", "b", "c"], "b")      // => ["a", "c"]
without([1, 2, 3], 4)              // => [1, 2, 3]
without([], 1)                     // => []

module.exports = without;
