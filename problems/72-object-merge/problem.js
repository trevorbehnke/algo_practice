/**
 * Object Merge
 *
 * Given two or more objects, merge them into one. If the same key
 * appears in multiple objects, the LAST one wins.
 *
 * Examples:
 *   merge({ a: 1 }, { b: 2 })             => { a: 1, b: 2 }
 *   merge({ a: 1 }, { a: 2 })             => { a: 2 }
 *   merge({ a: 1 }, { b: 2 }, { c: 3 })   => { a: 1, b: 2, c: 3 }
 *   merge({ a: 1, b: 2 }, { b: 3, c: 4 }) => { a: 1, b: 3, c: 4 }
 *   merge({})                              => {}
 *
 * Hint: Use rest parameters to accept any number of objects:
 *       function merge(...objects)
 *       Then loop through each object, and for each one, loop through
 *       its keys and add them to the result.
 *
 * Pattern: Nested iteration with rest parameters.
 */

function merge(...objects) {
  let result = {}
  objects.forEach((el) => {
    for (const key in el) {
      result[key] = el[key]
    }
  })
  return result
}


// merge({ a: 1 }, { b: 2 })             // => { a: 1, b: 2 }
// merge({ a: 1 }, { a: 2 })             // => { a: 2 }
merge({ a: 1 }, { b: 2 }, { c: 3 })   // => { a: 1, b: 2, c: 3 }
// merge({ a: 1, b: 2 }, { b: 3, c: 4 }) // => { a: 1, b: 3, c: 4 }
// merge({})                             // => {}

module.exports = merge;
