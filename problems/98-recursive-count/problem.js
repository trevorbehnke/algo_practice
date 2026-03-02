/**
 * Recursive Count
 *
 * Given an array and a target value, return how many times the target
 * appears in the array. You must use recursion (no loops).
 *
 * Examples:
 *   recursiveCount([1, 2, 3, 2, 2], 2)      => 3
 *   recursiveCount([1, 2, 3], 4)             => 0
 *   recursiveCount([], 1)                    => 0
 *   recursiveCount(["a", "b", "a"], "a")     => 2
 *   recursiveCount([5, 5, 5], 5)             => 3
 *
 * Hint: What should you return when there's nothing left to check?
 *       For each step, decide if the first element counts, then
 *       ask the same question about the rest.
 */

function recursiveCount(arr, target) {
    if (arr.length === 0) return 0
    if (arr[0] === target) {
        return 1 + recursiveCount(arr.slice(1), target)
    } else {
        return recursiveCount(arr.slice(1), target)
    }
}

module.exports = recursiveCount;
