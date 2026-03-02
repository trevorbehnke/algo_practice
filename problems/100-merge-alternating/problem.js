/**
 * Merge Alternating
 *
 * Given two arrays, merge them by alternating elements:
 * first from arr1, then from arr2, then arr1, then arr2, etc.
 * If one array is longer, append the remaining elements at the end.
 *
 * Examples:
 *   mergeAlternating([1, 3, 5], [2, 4, 6])
 *     => [1, 2, 3, 4, 5, 6]
 *
 *   mergeAlternating(["a", "c"], ["b", "d", "e", "f"])
 *     => ["a", "b", "c", "d", "e", "f"]
 *
 *   mergeAlternating([1, 2, 3], [])
 *     => [1, 2, 3]
 *
 *   mergeAlternating([], [])
 *     => []
 *
 * Hint: Think about how you solved a similar problem with strings.
 *       What determines how far you loop?
 */

function mergeAlternating(arr1, arr2) {
    let result = []
    let max = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < max; i++) {
        if (i < arr1.length) result.push(arr1[i])
        if (i < arr2.length) result.push(arr2[i])
    }
    return result
}

module.exports = mergeAlternating;
