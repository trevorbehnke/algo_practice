/**
 * Pluck
 *
 * Given an array of objects and a key name, return an array of the
 * values at that key from each object.
 *
 * Examples:
 *   pluck([{ name: "Alice" }, { name: "Bob" }], "name")
 *     => ["Alice", "Bob"]
 *
 *   pluck([{ a: 1, b: 2 }, { a: 3, b: 4 }], "b")
 *     => [2, 4]
 *
 *   pluck([{ x: 1 }, { y: 2 }], "x")
 *     => [1, undefined]
 *
 *   pluck([], "name")
 *     => []
 *
 * Hint: This is a great use case for .map(). Map each object to
 *       obj[key].
 *
 * Pattern: Transform with .map() — extracting a property.
 */

function pluck(arr, key) {
  // Your code here
}

module.exports = pluck;
