/**
 * Deep Equal
 *
 * Given two values, return true if they are deeply equal. This means:
 *   - Primitives (numbers, strings, booleans, null, undefined) are compared by value
 *   - Arrays are equal if they have the same length and each element is deeply equal
 *   - Objects are equal if they have the same keys and each value is deeply equal
 *
 * Examples:
 *   deepEqual(1, 1)                         => true
 *   deepEqual("hi", "hi")                   => true
 *   deepEqual([1, 2], [1, 2])               => true
 *   deepEqual([1, 2], [1, 3])               => false
 *   deepEqual({ a: 1 }, { a: 1 })           => true
 *   deepEqual({ a: 1 }, { a: 2 })           => false
 *   deepEqual({ a: [1, 2] }, { a: [1, 2] }) => true
 *   deepEqual(null, null)                   => true
 *   deepEqual(1, "1")                       => false
 *
 * Hint: This is a great problem for RECURSION — the function calls itself.
 *       Start by handling the simple case: if both values are NOT objects
 *       (or are null), just compare them with ===.
 *       If they ARE objects, check that they have the same keys, then
 *       call deepEqual on each pair of values.
 *
 *       Array.isArray(val) tells you if something is an array.
 *       typeof val === "object" is true for both objects and arrays (and null!).
 *
 * Pattern: Recursion — the function calls itself on smaller pieces.
 */

function deepEqual(a, b) {
  if (a === null && b === null) return true
  if (a === null || b === null) return false
  if (typeof a !== "object" && typeof b !== "object") return a === b
  if (typeof a === "object" && typeof b === "object") {
    if (Object.keys(a).length === Object.keys(b).length) {
      for (let key in a) {
        if (deepEqual(a[key], b[key]) === false) {
          return false
        }
      }
      return true
    }
    return false
  }
}

// deepEqual(1, 1)
// deepEqual("hi", "hi")
// deepEqual([1, 2], [1, 2])
// deepEqual([1, 2], [1, 3])
// deepEqual({ a: 1 }, { a: 1 })
// deepEqual({ a: 1 }, { a: 2 })
// deepEqual({ a: [1, 2] }, { a: [1, 2] })
// deepEqual(null, null)
// deepEqual(1, "1")

module.exports = deepEqual;
