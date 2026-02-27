/**
 * Index Map
 *
 * Given an array, return an object where each value is mapped to an
 * array of all indices where it appears.
 *
 * Examples:
 *   indexMap([1, 2, 3, 2, 1])
 *     => { 1: [0, 4], 2: [1, 3], 3: [2] }
 *
 *   indexMap(["a", "b", "a"])
 *     => { a: [0, 2], b: [1] }
 *
 *   indexMap([5, 5, 5])
 *     => { 5: [0, 1, 2] }
 *
 *   indexMap([])
 *     => {}
 *
 * Hint: This is a twist on the frequency map pattern. Instead of counting
 *       occurrences, you're collecting indices. Loop through the array.
 *       If the key doesn't exist yet, create it with an array containing
 *       the current index. If it does exist, push the index onto the array.
 *
 * Pattern: Frequency map variant — collect values instead of counting.
 */

function indexMap(arr) {
  let result = {}
  arr.forEach((val, i) => {
    result[val] === undefined ? result[val] = [i] : result[val].push(i)
  })
  return result
}

indexMap([1, 2, 3, 2, 1]) //=> { 1: [0, 4], 2: [1, 3], 3: [2] }
indexMap(["a", "b", "a"]) //=> { a: [0, 2], b: [1] }
indexMap([5, 5, 5]) //=> { 5: [0, 1, 2] }
indexMap([]) //=> {}

module.exports = indexMap;
