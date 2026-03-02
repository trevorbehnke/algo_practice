/**
 * Find Outlier
 *
 * Given an array of numbers where all but ONE are either even or odd,
 * find and return the outlier (the one that doesn't match the majority).
 *
 * The array will always have at least 3 elements, and there will
 * always be exactly one outlier.
 *
 * Examples:
 *   findOutlier([2, 4, 6, 8, 3])         => 3
 *   findOutlier([1, 3, 5, 7, 4])         => 4
 *   findOutlier([2, 6, 8, 10, 3, 12])    => 3
 *   findOutlier([1, 1, 1, 2])            => 2
 *
 * Hint: First figure out whether the majority is even or odd. Then
 *       find the one that doesn't fit. How can you tell the majority
 *       from just the first few elements?
 */

// SOLUTION 1
function findOutlier(arr) {
  let freq = { even: 0, odd: 0 }
  let maj = ""
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? freq.even++ : freq.odd++
  }
  freq.even > freq.odd ? maj = 'even' : maj = 'odd'
  for (let j = 0; j < arr.length; j++) {
    if (maj === 'even' && arr[j] % 2 !== 0) {
      return arr[j]
    } else if (maj === 'odd' && arr[j] % 2 === 0) {
      return arr[j]
    }
  }
}

findOutlier([2, 4, 6, 8, 3])         // => 3
findOutlier([1, 3, 5, 7, 4])         // => 4
findOutlier([2, 6, 8, 10, 3, 12])    // => 3
findOutlier([1, 1, 1, 2])            // => 2

module.exports = findOutlier;
