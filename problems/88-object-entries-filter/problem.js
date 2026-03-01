/**
 * Object Entries Filter
 *
 * Given an object, return a new object containing only the entries
 * where the key starts with a given prefix.
 *
 * Examples:
 *   filterByPrefix({ color_red: 1, color_blue: 2, size: 3 }, "color_")
 *     => { color_red: 1, color_blue: 2 }
 *
 *   filterByPrefix({ a_x: 1, a_y: 2, b_z: 3 }, "a_")
 *     => { a_x: 1, a_y: 2 }
 *
 *   filterByPrefix({ foo: 1, bar: 2 }, "baz")
 *     => {}
 *
 *   filterByPrefix({}, "x")
 *     => {}
 *
 * Hint: Loop through the object keys. For each key, check if it starts
 *       with the prefix using key.startsWith(prefix). If yes, add it
 *       to the result.
 *
 * Pattern: Filter and build (object — filtering by key this time).
 */

function filterByPrefix(obj, prefix) {
  let result = {}
  for (const key in obj) {
    if (key.startsWith(prefix)) {
      result[key] = obj[key]
    }
  }
  return result
}

filterByPrefix({ color_red: 1, color_blue: 2, size: 3 }, "color_")
// => { color_red: 1, color_blue: 2 }

filterByPrefix({ a_x: 1, a_y: 2, b_z: 3 }, "a_")
// => { a_x: 1, a_y: 2 }

filterByPrefix({ foo: 1, bar: 2 }, "baz")
// => {}

filterByPrefix({}, "x")
// => {}

module.exports = filterByPrefix;
