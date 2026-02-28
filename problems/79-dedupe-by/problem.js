/**
 * Dedupe By
 *
 * Given an array and a callback function, remove duplicates based on
 * the result of calling the callback on each element. Keep the FIRST
 * element that produces each unique result.
 *
 * Examples:
 *   dedupeBy([1.1, 1.9, 2.3, 2.8, 3.1], Math.floor)
 *     => [1.1, 2.3, 3.1]
 *     (floors: 1, 1, 2, 2, 3 — keep first of each)
 *
 *   dedupeBy(["hi", "hello", "hey", "bye"], w => w[0])
 *     => ["hi", "bye"]
 *     (first letters: h, h, h, b — keep first of each)
 *
 *   dedupeBy([1, 2, 3], x => x)
 *     => [1, 2, 3]
 *
 *   dedupeBy([], x => x)
 *     => []
 *
 * Hint: Use a "seen" Set to track which callback results you've already
 *       encountered. Loop through the array. For each element, compute
 *       the callback result. If it's not in "seen", add it to seen and
 *       keep the element. If it is, skip it.
 *
 * Pattern: Hash map lookup with callback (combines countBy + remove duplicates).
 */

function dedupeBy(arr, callback) {
  let seen = new Set()
  let result = []
  arr.forEach((el) => {
    let ans = callback(el)
    if (!seen.has(ans)) {
      seen.add(ans)
      result.push(el)
    }
  })
  return result
}

dedupeBy([1.1, 1.9, 2.3, 2.8, 3.1], Math.floor)
// => [1.1, 2.3, 3.1]
// (floors: 1, 1, 2, 2, 3 — keep first of each)

// dedupeBy(["hi", "hello", "hey", "bye"], w => w[0])
// => ["hi", "bye"]
// (first letters: h, h, h, b — keep first of each)

// dedupeBy([1, 2, 3], x => x)
// => [1, 2, 3]

// dedupeBy([], x => x)
// => []

module.exports = dedupeBy;
