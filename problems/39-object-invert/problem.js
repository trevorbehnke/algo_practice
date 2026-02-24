/**
 * Object Invert
 *
 * Given an object, return a new object where the keys and values are swapped.
 *
 * Examples:
 *   invert({ a: 1, b: 2, c: 3 })        => { 1: "a", 2: "b", 3: "c" }
 *   invert({ name: "Alice", age: "25" }) => { Alice: "name", "25": "age" }
 *   invert({})                           => {}
 *
 * Hint: Loop through the object's keys. For each key, the value becomes
 *       the new key, and the old key becomes the new value.
 *
 * Pattern: Transform and build (object to object).
 */

// SOLUTION 1
// function invert(obj) {
//   let result = {}
//   let keys = Object.keys(obj)
//   let values = Object.values(obj)
//   values.forEach((value, i) => {
//     result[value] = keys[i]
//   })
//   return result
// }

// SOLUTION 2
function invert(obj) {
  let result = {}
  for (let key in obj) {
    result[obj[key]] = key
  }
  return result
}

// invert({ a: 1, b: 2, c: 3 })         // => { 1: "a", 2: "b", 3: "c" }
invert({ name: "Alice", age: "25" }) // => { Alice: "name", "25": "age" }
// invert({})                           // => {}

module.exports = invert;
