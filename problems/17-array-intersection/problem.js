/**
 * Array Intersection
 *
 * Given two arrays, return a new array containing only the values that
 * appear in BOTH arrays. No duplicates in the result. Preserve the order
 * from the first array.
 *
 * Examples:
 *   intersection([1, 2, 3, 4], [3, 4, 5, 6])     => [3, 4]
 *   intersection([1, 2, 2, 3], [2, 2, 3, 4])     => [2, 3]
 *   intersection([1, 2], [3, 4])                  => []
 *   intersection(["a", "b", "c"], ["b", "c", "d"]) => ["b", "c"]
 *
 * Hint: Build a "seen" map from the second array first, then loop through
 *       the first array and check if each element exists in the map.
 *       Use another map to avoid adding duplicates to the result.
 *
 * Pattern: Hash map lookup (like two sum / remove duplicates).
 */

function intersection(arr1, arr2) {
  let result = []
  let seen = {}
  // build seen map from arr2
  for (let i = 0; i < arr2.length; i++) {
    if (!seen[arr2[i]]) {
      seen[arr2[i]] = true
    }
  }
  // check if each element in arr1 exists in the seen map
  for (let i = 0; i < arr1.length; i++) {
    if (seen[arr1[i]]) {
      result.push(arr1[i])
    }
  }
  return [...new Set(result)]
}

// intersection([1, 2, 3, 4], [3, 4, 5, 6])
intersection([1, 2, 2, 3], [2, 2, 3, 4])
// intersection([1, 2], [3, 4])               
// intersection(["a", "b", "c"], ["b", "c", "d"])

module.exports = intersection;
