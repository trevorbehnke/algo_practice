/**
 * Array Sample
 *
 * Given an array and a number n, return n random elements from the
 * array. No element should be picked more than once. If n is greater
 * than the array length, return a shuffled copy of the whole array.
 *
 * Examples:
 *   sample([1, 2, 3, 4, 5], 2)  => [3, 1] (random — any 2 unique elements)
 *   sample([1, 2, 3], 5)        => [2, 3, 1] (all elements, shuffled)
 *   sample([1, 2, 3], 0)        => []
 *   sample([], 3)               => []
 *
 * Hint: Make a copy of the array first (so you don't modify the original).
 *       Then use the Fisher-Yates approach: for each position, pick a
 *       random element from the remaining ones and swap it in.
 *
 *       Simple approach:
 *       1. Copy the array: let copy = [...arr]
 *       2. For i from 0 to n-1:
 *          - Pick a random index from i to copy.length-1:
 *            let rand = i + Math.floor(Math.random() * (copy.length - i))
 *          - Swap copy[i] and copy[rand]
 *       3. Return copy.slice(0, n)
 *
 * Pattern: Fisher-Yates partial shuffle (new!).
 */

function sample(arr, n) {
  n = Math.min(n, arr.length)
  let copy = [...arr]
  for (let i = 0; i < n; i++) {
    let rand = i + Math.floor(Math.random() * (copy.length - i))
    let temp = copy[i]
    copy[i] = copy[rand]
    copy[rand] = temp
  }
  return copy.slice(0, n)

}

sample([1, 2, 3, 4, 5], 2)  // => [3, 1] (random — any 2 unique elements)
sample([1, 2, 3], 5)        // => [2, 3, 1] (all elements, shuffled)
sample([1, 2, 3], 0)        // => []
sample([], 3)               // => []

module.exports = sample;
