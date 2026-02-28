/**
 * Sum By
 *
 * Given an array of objects and a key name, return the sum of all
 * values at that key.
 *
 * Examples:
 *   sumBy([{ n: 4 }, { n: 2 }, { n: 8 }], "n")                    => 14
 *   sumBy([{ age: 25 }, { age: 30 }, { age: 35 }], "age")         => 90
 *   sumBy([{ x: 1 }, { x: 2 }, { y: 3 }], "x")                   => 3
 *   sumBy([], "n")                                                 => 0
 *
 * Hint: Loop through the array. For each object, add obj[key] to a
 *       running total. If obj[key] is undefined (the key doesn't exist
 *       on that object), just skip it (add 0).
 *
 * Pattern: Accumulate from objects — like sumArray but accessing a property.
 */

function sumBy(arr, key) {
  let sum = 0
  arr.forEach((el) => {
    if (el[key]) {
      sum += el[key]
    }
  })
  console.log(sum)
  return sum
}

sumBy([{ n: 4 }, { n: 2 }, { n: 8 }], "n")             // => 14
sumBy([{ age: 25 }, { age: 30 }, { age: 35 }], "age")  // => 90
sumBy([{ x: 1 }, { x: 2 }, { y: 3 }], "x")             // => 3
sumBy([], "n")                                         // => 0 

module.exports = sumBy;
