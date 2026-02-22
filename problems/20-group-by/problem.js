/**
 * Group By
 *
 * Given an array of objects and a key name, group the objects into an
 * object where each key is a unique value of that property, and each
 * value is an array of objects that have that property value.
 *
 * Examples:
 *   const people = [
 *     { name: "Alice", age: 25 },
 *     { name: "Bob", age: 30 },
 *     { name: "Charlie", age: 25 },
 *   ];
 *   groupBy(people, "age") => {
 *     25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
 *     30: [{ name: "Bob", age: 30 }]
 *   }
 *
 *   const words = [
 *     { word: "hi", length: 2 },
 *     { word: "hey", length: 3 },
 *     { word: "ok", length: 2 },
 *   ];
 *   groupBy(words, "length") => {
 *     2: [{ word: "hi", length: 2 }, { word: "ok", length: 2 }],
 *     3: [{ word: "hey", length: 3 }]
 *   }
 *
 * Hint: This is a twist on the frequency map pattern. Instead of counting,
 *       you're collecting objects into arrays. The key idea:
 *       - If the group doesn't exist yet, create it as an empty array.
 *       - Then push the current object into that group.
 *
 * Pattern: Hash map with array values (evolved frequency map).
 */

function groupBy(arr, key) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i][key]
    if (!map[val]) {
      map[val] = []
    }
    map[val].push(arr[i])
  }
  return map
}

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

groupBy(people, "age")

// {
//   25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
//   30: [{ name: "Bob", age: 30 }]
// }

module.exports = groupBy;
