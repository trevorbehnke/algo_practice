/**
 * Recursive Flatten Once
 *
 * Given a nested array, flatten it by ONE level using recursion.
 * Do not use .flat() or loops.
 *
 * Examples:
 *   flattenOnce([[1, 2], [3, 4]])           => [1, 2, 3, 4]
 *   flattenOnce([[1], [2, [3]]])            => [1, 2, [3]]
 *   flattenOnce([1, [2, 3], 4])             => [1, 2, 3, 4]
 *   flattenOnce([])                         => []
 *   flattenOnce([[1, 2]])                   => [1, 2]
 *
 * Hint: For each element, decide whether to spread it or keep it
 *       as-is. Use Array.isArray() to check. Think about how
 *       recursion helps you process one element at a time.
 */

function flattenOnce(arr) {
    if (arr.length === 0) return []
    let first = Array.isArray(arr[0]) ? [...arr[0]] : [arr[0]]
    return [...first, ...flattenOnce(arr.slice(1))]
}

module.exports = flattenOnce;
