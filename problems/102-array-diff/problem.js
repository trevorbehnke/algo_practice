/**
 * Array Diff
 *
 * Given two arrays, return a new array containing elements that are
 * in the first array but NOT in the second. No duplicates in the result.
 *
 * Examples:
 *   arrayDiff([1, 2, 3, 4], [2, 4])          => [1, 3]
 *   arrayDiff([1, 2, 3], [1, 2, 3])          => []
 *   arrayDiff([1, 2, 3], [])                 => [1, 2, 3]
 *   arrayDiff([], [1, 2])                    => []
 *   arrayDiff([1, 1, 2, 2, 3], [2])          => [1, 3]
 *
 * Hint: How can you quickly check if something exists in the
 *       second array? Think about what you've used for fast lookups.
 */

function arrayDiff(arr1, arr2) {
    let result = []
    new Set([...arr1]).forEach((num) => {
        if (!new Set(arr2).has(num)) result.push(num)
    })
    return result
}

module.exports = arrayDiff;
