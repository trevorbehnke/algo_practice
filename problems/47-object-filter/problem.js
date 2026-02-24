/**
 * Object Filter
 *
 * Given an object and a callback function, return a new object containing
 * only the key-value pairs where callback(value) returns true.
 *
 * Examples:
 *   objectFilter({ a: 1, b: 2, c: 3 }, v => v > 1)
 *     => { b: 2, c: 3 }
 *
 *   objectFilter({ x: "hi", y: "hello", z: "h" }, v => v.length > 1)
 *     => { x: "hi", y: "hello" }
 *
 *   objectFilter({ a: 1, b: 2 }, v => v > 10)
 *     => {}
 *
 * Hint: Loop through the object keys with for...in. For each key,
 *       call the callback on the value. If it returns true, add
 *       that key-value pair to the result object.
 *
 * Pattern: Filter and build (object version of array filter).
 */

function objectFilter(obj, callback) {
  let result = {}
  for (let key in obj) {
    if (callback(obj[key])) {
      result[key] = obj[key]
    }
  }
  return result
}

objectFilter({ a: 1, b: 2, c: 3 }, v => v > 1) // => { b: 2, c: 3 }

objectFilter({ x: "hi", y: "hello", z: "h" }, v => v.length > 1) // => { x: "hi", y: "hello" }

objectFilter({ a: 1, b: 2 }, v => v > 10) // => {}

module.exports = objectFilter;
