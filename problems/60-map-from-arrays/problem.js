/**
 * Map From Arrays
 *
 * Given two arrays — one of keys and one of values — return an object
 * mapping each key to its corresponding value. If the keys array is
 * longer, the extra keys should have a value of null. If the values
 * array is longer, ignore the extra values.
 *
 * Examples:
 *   mapFromArrays(["a", "b", "c"], [1, 2, 3])
 *     => { a: 1, b: 2, c: 3 }
 *
 *   mapFromArrays(["x", "y"], [10, 20, 30])
 *     => { x: 10, y: 20 }
 *
 *   mapFromArrays(["a", "b", "c"], [1])
 *     => { a: 1, b: null, c: null }
 *
 *   mapFromArrays([], [])
 *     => {}
 *
 * Hint: Loop through the keys array. For each index, set the value
 *       from the values array at the same index. If that index doesn't
 *       exist in the values array, use null instead.
 *       Check with: values[i] !== undefined ? values[i] : null
 *
 * Pattern: Parallel array traversal — build an object.
 */

function mapFromArrays(keys, values) {
  let result = {}
  keys.forEach((el, i) => {
    values[i] !== undefined ? result[el] = values[i] : result[el] = null
  })
  return result
}

mapFromArrays(["a", "b", "c"], [1, 2, 3]) // => { a: 1, b: 2, c: 3 }
mapFromArrays(["x", "y"], [10, 20, 30]) // => { x: 10, y: 20 }
mapFromArrays(["a", "b", "c"], [1]) // => { a: 1, b: null, c: null }
mapFromArrays([], []) // => {}

module.exports = mapFromArrays;
