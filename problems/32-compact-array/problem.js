/**
 * Compact Array
 *
 * Given an array, return a new array with all falsy values removed.
 * Falsy values are: false, 0, "", null, undefined, NaN.
 *
 * Examples:
 *   compact([0, 1, false, 2, "", 3])        => [1, 2, 3]
 *   compact([null, undefined, NaN, "hello"]) => ["hello"]
 *   compact([1, 2, 3])                      => [1, 2, 3]
 *   compact([])                             => []
 *
 * Hint: Remember from the syntax drills — a simple `if (val)` check
 *       catches all falsy values.
 *
 * Pattern: Build and return with a condition.
 */

function compact(arr) {
  let result = []
  arr.forEach((val) => {
    if (val) {
      result.push(val)
    }
  })
  return result
}

compact([0, 1, false, 2, "", 3])
compact([null, undefined, NaN, "hello"])
compact([1, 2, 3])
compact([])

module.exports = compact;
