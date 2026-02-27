/**
 * Nested Object Value
 *
 * Given an object and a path string (keys separated by dots), return the
 * value at that path. If any key along the path doesn't exist, return undefined.
 *
 * Examples:
 *   getNestedValue({ a: { b: { c: 42 } } }, "a.b.c")        => 42
 *   getNestedValue({ a: { b: { c: 42 } } }, "a.b")           => { c: 42 }
 *   getNestedValue({ a: { b: 1 } }, "a.x")                   => undefined
 *   getNestedValue({ name: "Alice" }, "name")                 => "Alice"
 *   getNestedValue({}, "a.b")                                 => undefined
 *
 * Hint: Split the path by "." to get an array of keys. Then walk through
 *       the object one key at a time:
 *         let current = obj
 *         for each key: current = current[key]
 *       If current becomes undefined at any point, return undefined.
 *
 * Pattern: Iterative object traversal with dot-path.
 */

function getNestedValue(obj, path) {
  const keyArr = path.split(".")
  for (let i = 0; i < keyArr.length; i++) {
    obj = obj[keyArr[i]]
    if (obj === undefined) return undefined
  }
  return obj
}

// Given an object and a key; Find the value in the object.

getNestedValue({ a: { b: { c: 42 } } }, "a.b.c")        // => 42
getNestedValue({ a: { b: { c: 42 } } }, "a.b")          // => { c: 42 }
getNestedValue({ a: { b: 1 } }, "a.x")                  // => undefined
getNestedValue({ name: "Alice" }, "name")               // => "Alice"
getNestedValue({}, "a.b")                               // => undefined

module.exports = getNestedValue;
