/**
 * Object Diff
 *
 * Given two objects, return an array of keys where the values differ.
 * Only compare keys that exist in BOTH objects.
 *
 * Examples:
 *   objectDiff({ a: 1, b: 2, c: 3 }, { a: 1, b: 5, c: 3 })  => ["b"]
 *   objectDiff({ x: 1, y: 2 }, { x: 1, y: 2 })               => []
 *   objectDiff({ a: 1 }, { a: 2 })                            => ["a"]
 *   objectDiff({ a: 1, b: 2 }, { c: 3 })                     => []
 *   objectDiff({}, {})                                        => []
 *
 * Hint: Get the keys of the first object. Loop through them. For each
 *       key, check if it exists in the second object AND if the values
 *       are different. If so, add it to the result.
 *
 * Pattern: Compare and collect.
 */

function objectDiff(obj1, obj2) {
  let result = []
  Object.keys(obj1).forEach((key) => {
    if (obj2[key] !== undefined && obj1[key] !== obj2[key]) {
      result.push(key)
    }
  })
  return result
}

objectDiff({ a: 1, b: 2, c: 3 }, { a: 1, b: 5, c: 3 })  // => ["b"]
objectDiff({ x: 1, y: 2 }, { x: 1, y: 2 })              // => []
objectDiff({ a: 1 }, { a: 2 })                          // => ["a"]
objectDiff({ a: 1, b: 2 }, { c: 3 })                    // => []
objectDiff({}, {})                                      // => []

module.exports = objectDiff;
