/**
 * Zip Object
 *
 * Given an array of [key, value] pairs, return an object built from
 * those pairs. If a key appears more than once, the last value wins.
 *
 * Examples:
 *   zipObject([["a", 1], ["b", 2], ["c", 3]])
 *     => { a: 1, b: 2, c: 3 }
 *
 *   zipObject([["name", "Alice"], ["age", 25]])
 *     => { name: "Alice", age: 25 }
 *
 *   zipObject([["a", 1], ["a", 2]])
 *     => { a: 2 }
 *
 *   zipObject([])
 *     => {}
 *
 * Hint: Loop through the array. Each element is a pair like ["a", 1].
 *       You can destructure it: let [key, value] = pair
 *       Or just use pair[0] and pair[1].
 *       Then set result[key] = value.
 *
 * Pattern: Build object from pairs (introduces destructuring).
 */

function zipObject(pairs) {
  let result = {}
  pairs.forEach((([key, val]) => {
    result[key] = val
  }))
  return result
}

zipObject([["a", 1], ["b", 2], ["c", 3]]) //=> { a: 1, b: 2, c: 3 }

zipObject([["name", "Alice"], ["age", 25]]) //=> { name: "Alice", age: 25 }

zipObject([["a", 1], ["a", 2]]) //=> { a: 2 }

zipObject([]) //=> {}

module.exports = zipObject;
