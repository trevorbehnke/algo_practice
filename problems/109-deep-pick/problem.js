/**
 * Deep Pick
 *
 * Given an object and an array of dot-separated paths, return a new
 * object containing only the values at those paths. If a path doesn't
 * exist, skip it.
 *
 * Examples:
 *   deepPick({ a: 1, b: 2, c: 3 }, ["a", "c"])
 *     => { a: 1, c: 3 }
 *
 *   deepPick({ user: { name: "Jo", age: 25 }, role: "admin" }, ["user.name", "role"])
 *     => { "user.name": "Jo", role: "admin" }
 *
 *   deepPick({ x: 1 }, ["y"])
 *     => {}
 *
 *   deepPick({}, ["a"])
 *     => {}
 *
 * Hint: You've navigated nested objects with dot paths before.
 *       For each path, try to get the value — if you find it,
 *       add it to your result using the full path as the key.
 */

function deepPick(obj, paths) {

}

module.exports = deepPick;
