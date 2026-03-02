/**
 * Swap Pairs
 *
 * Given an array, return a new array where every two adjacent elements
 * are swapped. If the array has an odd length, the last element stays
 * in place.
 *
 * Examples:
 *   swapPairs([1, 2, 3, 4])       => [2, 1, 4, 3]
 *   swapPairs([1, 2, 3])          => [2, 1, 3]
 *   swapPairs([1])                => [1]
 *   swapPairs([])                 => []
 *   swapPairs(["a", "b", "c", "d", "e"])
 *     => ["b", "a", "d", "c", "e"]
 *
 * Hint: Think about stepping through the array two elements at a time.
 *       What do you do when there's no partner to swap with?
 */

function swapPairs(arr) {
    let result = []
    for (let i = 0; i < arr.length; i += 2) {
        if (i + 1 < arr.length) result.push(arr[i + 1])
        result.push(arr[i])
    }
    return result
}

swapPairs(["a", "b", "c", "d", "e"])
//  => ["b", "a", "d", "c", "e"]

module.exports = swapPairs;
