/**
 * Array Partition
 *
 * Given an array and a callback function, split the array into two arrays:
 * one where the callback returns true, and one where it returns false.
 * Return them as an array of two arrays: [[trueItems], [falseItems]].
 *
 * Examples:
 *   partition([1, 2, 3, 4, 5], n => n % 2 === 0)
 *     => [[2, 4], [1, 3, 5]]
 *
 *   partition(["cat", "car", "dog"], w => w.startsWith("c"))
 *     => [["cat", "car"], ["dog"]]
 *
 *   partition([1, 2, 3], n => n > 10)
 *     => [[], [1, 2, 3]]
 *
 * Hint: Create two result arrays (trueArr and falseArr). Loop through
 *       the input. Call the callback on each element — push to trueArr
 *       if it returns true, falseArr if false. Return [trueArr, falseArr].
 *
 * Pattern: Categorize and collect.
 */

function partition(arr, callback) {
  let trueArr = []
  let falseArr = []
  arr.forEach((val) => {
    callback(val) ? trueArr.push(val) : falseArr.push(val)
  })
  return [trueArr, falseArr]
}

partition([1, 2, 3, 4, 5], n => n % 2 === 0)
// => [[2, 4], [1, 3, 5]]

partition(["cat", "car", "dog"], w => w.startsWith("c"))
// => [["cat", "car"], ["dog"]]

partition([1, 2, 3], n => n > 10)
// => [[], [1, 2, 3]]

module.exports = partition;
