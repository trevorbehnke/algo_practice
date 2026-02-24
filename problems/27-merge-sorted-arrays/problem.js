/**
 * Merge Sorted Arrays
 *
 * Given two sorted arrays (ascending), merge them into a single sorted array.
 *
 * Examples:
 *   mergeSorted([1, 3, 5], [2, 4, 6])   => [1, 2, 3, 4, 5, 6]
 *   mergeSorted([1, 2], [3, 4, 5])      => [1, 2, 3, 4, 5]
 *   mergeSorted([], [1, 2])             => [1, 2]
 *   mergeSorted([1], [])                => [1]
 *
 * Constraints:
 *   - Do NOT just concatenate and sort. That works but defeats the purpose!
 *   - Both input arrays are already sorted in ascending order.
 *
 * Hint: Use two pointers — one for each array. Compare the elements at
 *       both pointers, push the smaller one to the result, and advance
 *       that pointer. When one array is exhausted, push the rest of
 *       the other array.
 *
 * Pattern: Two pointers (one per array).
 */

function mergeSorted(arr1, arr2) {
  let result = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }

  return result
}

mergeSorted([1, 3, 5], [2, 4, 6])
mergeSorted([1, 2], [3, 4, 5])
mergeSorted([], [1, 2])
mergeSorted([1], [])

module.exports = mergeSorted;
