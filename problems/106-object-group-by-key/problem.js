/**
 * Object Group By Key
 *
 * Given an array of objects and a key name, group the objects by
 * the value at that key. Return an object where each key is a
 * unique value found at that property, and each value is an array
 * of objects that share that value.
 *
 * Examples:
 *   groupByKey([{ type: "a", n: 1 }, { type: "b", n: 2 }, { type: "a", n: 3 }], "type")
 *     => { a: [{ type: "a", n: 1 }, { type: "a", n: 3 }], b: [{ type: "b", n: 2 }] }
 *
 *   groupByKey([{ color: "red" }, { color: "red" }], "color")
 *     => { red: [{ color: "red" }, { color: "red" }] }
 *
 *   groupByKey([], "x")
 *     => {}
 *
 * Hint: You've built frequency maps before. This is similar, but
 *       instead of counting, you're collecting.
 */

function groupByKey(arr, key) {

}

module.exports = groupByKey;
