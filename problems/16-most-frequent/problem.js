/**
 * Most Frequent Element
 *
 * Given an array, return the element that appears the most times.
 * If there's a tie, return the one that appears first in the array.
 *
 * Examples:
 *   mostFrequent([1, 2, 3, 2, 2, 1])     => 2
 *   mostFrequent(["a", "b", "a"])         => "a"
 *   mostFrequent([5])                     => 5
 *   mostFrequent([1, 1, 2, 2, 3])        => 1  (tie, but 1 appears first)
 *
 * Constraints:
 *   - The array will always have at least one element.
 *
 * Hint: Combine two patterns you already know — build a frequency map
 *       (problem 04), then find the max value in it (problem 02).
 *
 * Pattern: Frequency map + track and update.
 */

function mostFrequent(arr) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++
    } else {
      map[arr[i]] = 1
    }
  }
  let maxCount = 0
  let winner
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] > maxCount) {
      maxCount = map[arr[i]]
      winner = arr[i]
    }
  }
  return winner
}

// mostFrequent([1, 2, 3, 2, 2, 1])
// mostFrequent(["a", "b", "a"])
// mostFrequent([5])
mostFrequent([1, 1, 2, 2, 3])

module.exports = mostFrequent;
