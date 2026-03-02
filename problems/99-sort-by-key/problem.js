/**
 * Sort By Key
 *
 * Given an array of objects and a key name, return a new array with
 * the objects sorted by the value at that key (ascending).
 * Assume all values at the key are numbers.
 *
 * Examples:
 *   sortByKey([{ name: "b", age: 30 }, { name: "a", age: 20 }], "age")
 *     => [{ name: "a", age: 20 }, { name: "b", age: 30 }]
 *
 *   sortByKey([{ x: 3 }, { x: 1 }, { x: 2 }], "x")
 *     => [{ x: 1 }, { x: 2 }, { x: 3 }]
 *
 *   sortByKey([], "score")
 *     => []
 *
 * Hint: You already know how to sort with a custom comparison.
 *       How do you access a property when the name is in a variable?
 */

function sortByKey(arr, key) {
    return [...arr].sort((a, b) => a[key] - b[key])
}

sortByKey([{ name: "b", age: 30 }, { name: "a", age: 20 }], "age")
// => [{ name: "a", age: 20 }, { name: "b", age: 30 }]

module.exports = sortByKey;
