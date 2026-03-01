/**
 * Object Has All Keys
 *
 * Given an object and an array of key names, return true if the object
 * contains ALL of the specified keys, false otherwise.
 *
 * Examples:
 *   hasAllKeys({ a: 1, b: 2, c: 3 }, ["a", "b"])     => true
 *   hasAllKeys({ a: 1, b: 2 }, ["a", "b", "c"])       => false
 *   hasAllKeys({ x: 1 }, [])                          => true
 *   hasAllKeys({}, ["a"])                              => false
 *
 * Hint: Loop through the keys array. If ANY key is missing from the
 *       object, return false immediately. If the loop finishes,
 *       return true. This is the "early return on failure" pattern.
 *
 *       Check if a key exists: obj[key] !== undefined
 *       (or use: key in obj)
 *
 * Pattern: Early return on failure (like isPalindrome, isSorted).
 */

function hasAllKeys(obj, keys) {
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === undefined) return false
  }
  return true

}

hasAllKeys({ a: 1, b: 2, c: 3 }, ["a", "b"])     // => true
hasAllKeys({ a: 1, b: 2 }, ["a", "b", "c"])      // => false
hasAllKeys({ x: 1 }, [])                         // => true
hasAllKeys({}, ["a"])                            // => false

module.exports = hasAllKeys;
