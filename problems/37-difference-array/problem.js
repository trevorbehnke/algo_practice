/**
 * Difference Array
 *
 * Given two arrays, return a new array containing elements that are in
 * the first array but NOT in the second array. No duplicates in the result.
 *
 * Examples:
 *   difference([1, 2, 3, 4], [2, 4])       => [1, 3]
 *   difference([1, 2, 3], [1, 2, 3])       => []
 *   difference([1, 2, 3], [4, 5, 6])       => [1, 2, 3]
 *   difference([1, 1, 2, 2], [1])           => [2]
 *   difference([], [1, 2])                  => []
 *
 * Hint: Build a "seen" map from the second array (like intersection,
 *       problem 17), then loop through the first array and keep
 *       elements that are NOT in the map.
 *
 * Pattern: Hash map lookup (opposite of intersection).
 */

function difference(arr1, arr2) {
  let seen = {}
  let result = []
  arr2.forEach((num) => {
    !seen[num] ? seen[num] = 1 : seen[num]++
  })
  arr1.forEach((num) => {
    if (!seen[num] && !result.includes(num)) {
      result.push(num)
    }
  })
  return result

}

// difference([1, 2, 3, 4], [2, 4])
// difference([1, 2, 3], [1, 2, 3])
// difference([1, 2, 3], [4, 5, 6])
difference([1, 1, 2, 2], [1])
// difference([], [1, 2])

module.exports = difference;
