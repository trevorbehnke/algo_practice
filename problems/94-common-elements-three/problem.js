/**
 * Common Elements (Three Arrays)
 *
 * Given three arrays, return an array of elements that appear in ALL
 * three. No duplicates in the result.
 *
 * Examples:
 *   commonThree([1, 2, 3], [2, 3, 4], [3, 4, 5])        => [3]
 *   commonThree([1, 2], [2, 3], [3, 4])                  => []
 *   commonThree(["a", "b", "c"], ["b", "c"], ["c", "d"]) => ["c"]
 *   commonThree([1, 2, 3], [1, 2, 3], [1, 2, 3])        => [1, 2, 3]
 *   commonThree([], [1, 2], [2, 3])                      => []
 *
 * Hint: Think about how you solved the two-array version of this
 *       problem. How can you extend that approach to three arrays?
 */

// SOLUTION 1
// function commonThree(arr1, arr2, arr3) {
//   let seen = {}
//   let temp = {}
//   let result = []
//   let newArr1 = new Set([...arr1])
//   let newArr2 = new Set([...arr2])
//   let newArr3 = new Set([...arr3])
//   newArr3.forEach((num) => {
//     if (seen[num] === undefined) { seen[num] = true }
//   })
//   newArr2.forEach((num) => {
//     if (seen[num]) { temp[num] = true }
//   })
//   newArr1.forEach((num) => {
//     if (temp[num]) { result.push(num) }
//   })
//   return result
// }

// SOLUTION 2
function commonThree(arr1, arr2, arr3) {
  let set2 = new Set(arr2)
  let set3 = new Set(arr3)
  return [...new Set(arr1)].filter(val => set2.has(val) && set3.has(val))
}


commonThree([1, 2, 3], [2, 3, 4], [3, 4, 5])         // => [3]
commonThree([1, 2], [2, 3], [3, 4])                  // => []
commonThree(["a", "b", "c"], ["b", "c"], ["c", "d"]) // => ["c"]
commonThree([1, 2, 3], [1, 2, 3], [1, 2, 3])         // => [1, 2, 3]
commonThree([], [1, 2], [2, 3])                      // => []

module.exports = commonThree;
