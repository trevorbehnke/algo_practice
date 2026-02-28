/**
 * Object Map Values
 *
 * Given an object and a callback function, return a new object where
 * every value has been transformed by the callback. Keys stay the same.
 *
 * Examples:
 *   mapValues({ a: 1, b: 2, c: 3 }, v => v * 2)
 *     => { a: 2, b: 4, c: 6 }
 *
 *   mapValues({ x: "hi", y: "hello" }, v => v.length)
 *     => { x: 2, y: 5 }
 *
 *   mapValues({}, v => v)
 *     => {}
 *
 * Hint: Loop through the object with for...in. For each key, set
 *       result[key] = callback(obj[key]).
 *
 * Pattern: Transform and build (object — like objectFilter but transforming
 *          instead of filtering).
 */

function mapValues(obj, callback) {
  let result = {}
  for (let key in obj) {
    result[key] = callback(obj[key])
  }
  return result
}

mapValues({ a: 1, b: 2, c: 3 }, v => v * 2) // => { a: 2, b: 4, c: 6 }

mapValues({ x: "hi", y: "hello" }, v => v.length) // => { x: 2, y: 5 }

mapValues({}, v => v) // => {}

module.exports = mapValues;
