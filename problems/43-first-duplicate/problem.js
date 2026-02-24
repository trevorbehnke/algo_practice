/**
 * First Duplicate
 *
 * Given an array, return the first element that appears more than once.
 * If no duplicates exist, return null.
 *
 * Examples:
 *   firstDuplicate([1, 2, 3, 2, 1])     => 2
 *   firstDuplicate([1, 2, 3, 4])        => null
 *   firstDuplicate(["a", "b", "a"])      => "a"
 *   firstDuplicate([5, 5])              => 5
 *   firstDuplicate([])                  => null
 *
 * Hint: Use a "seen" object (like two-sum, problem 5). As you loop through,
 *       check if you've seen the current element before. If yes, return it
 *       immediately. If no, mark it as seen.
 *
 * Pattern: Hash map lookup with early return.
 */

// SOLUTION 1
function firstDuplicate(arr) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = 1
    } else {
      return arr[i]
    }
  }
  return null
}

// SOLUTION 2
// function firstDuplicate(arr) {
//   let seen = new Set()
//   for (let i = 0; i < arr.length; i++) {
//     if (seen.has(arr[i])) {
//       return arr[i]
//     }
//     seen.add(arr[i])
//   }
//   return null
// }

firstDuplicate([1, 2, 3, 2, 1])     // => 2
firstDuplicate([1, 2, 3, 4])        // => null
firstDuplicate(["a", "b", "a"])     // => "a"
firstDuplicate([5, 5])              // => 5
firstDuplicate([])                  // => null

module.exports = firstDuplicate;
