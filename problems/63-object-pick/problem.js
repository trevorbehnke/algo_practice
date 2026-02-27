/**
 * Object Pick
 *
 * Given an object and an array of keys, return a new object containing
 * only the key-value pairs whose keys are in the array.
 *
 * Examples:
 *   pick({ a: 1, b: 2, c: 3 }, ["a", "c"])       => { a: 1, c: 3 }
 *   pick({ name: "Alice", age: 25 }, ["name"])     => { name: "Alice" }
 *   pick({ a: 1, b: 2 }, ["c", "d"])              => {}
 *   pick({ a: 1, b: 2, c: 3 }, [])                => {}
 *   pick({}, ["a"])                                => {}
 *
 * Hint: Loop through the keys array. For each key, if the object has
 *       that key (check with obj[key] !== undefined or key in obj),
 *       add it to the result object.
 *
 * Pattern: Filter and build (object — similar to objectFilter, problem 47).
 */

function pick(obj, keys) {
  let result = {}
  keys.forEach((el, i) => {
    if (obj[el] !== undefined) {
      result[el] = obj[el]
    }
  })
  return result
}

pick({ a: 1, b: 2, c: 3 }, ["a", "c"])         // => { a: 1, c: 3 }
pick({ name: "Alice", age: 25 }, ["name"])     // => { name: "Alice" }
pick({ a: 1, b: 2 }, ["c", "d"])               // => {}
pick({ a: 1, b: 2, c: 3 }, [])                 // => {}
pick({}, ["a"])                                // => {}

module.exports = pick;
