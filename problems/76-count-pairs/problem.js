/**
 * Count Pairs
 *
 * Given an array of numbers, count how many pairs of elements sum to
 * a given target. Each element can only be used once.
 *
 * Examples:
 *   countPairs([1, 2, 3, 4, 5], 6)     => 2   (1+5, 2+4)
 *   countPairs([1, 1, 1, 1], 2)         => 2   (two pairs of 1+1)
 *   countPairs([1, 2, 3], 10)           => 0
 *   countPairs([3, 3, 3, 3], 6)         => 2
 *   countPairs([], 5)                   => 0
 *
 * Hint: This builds on pair-sum (problem 31) and two-sum (problem 5).
 *       Use a frequency map to track available numbers. For each number,
 *       check if its complement (target - num) is in the map.
 *       If it is, you found a pair — decrement both counts.
 *       Be careful with the case where num === complement (like 1+1=2):
 *       you need at least 2 of that number.
 *
 * Pattern: Hash map lookup with frequency tracking.
 */

// SOLUTION 1
// function countPairs(arr, target) {
//   let count = 0
//   let freq = {}
//   arr.forEach((num) => {
//     let comp = target - num
//     if (freq[comp] > 0) {
//       count++
//       freq[comp]--
//     } else {
//       freq[num] === undefined ? freq[num] = 1 : freq[num]++
//     }
//   })
//   return count
// }

// SOLUTION 2
function countPairs(arr, target) {
  let count = 0
  let freq = {}
  arr.forEach((num) => {
    let comp = target - num
    console.log(`num: ${num}, comp: ${comp}, freq:`, { ...freq }, `count: ${count}`)
    // Check is the compliment is in the map first
    if (freq[comp] > 0) {
      count++
      freq[comp]--
    } else if (freq[num] === undefined) {
      freq[num] = 1
    } else {
      freq[num]++
    }
  })
  return count
}

countPairs([1, 1, 5, 7, 9, 9], 14)           // => 1   (5+9)
// countPairs([1, 2, 3, 4, 5], 6)      // => 2   (1+5, 2+4)
// countPairs([1, 1, 1, 1], 2)         // => 2   (two pairs of 1+1)
// countPairs([1, 2, 3], 10)           // => 0
// countPairs([3, 3, 3, 3], 6)         // => 2
// countPairs([], 5)                   // => 0

module.exports = countPairs;
