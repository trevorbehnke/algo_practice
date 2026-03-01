/**
 * Reverse Words
 *
 * Given a string, reverse the order of the words (not the characters
 * within each word).
 *
 * Examples:
 *   reverseWords("hello world")           => "world hello"
 *   reverseWords("the quick brown fox")   => "fox brown quick the"
 *   reverseWords("hi")                    => "hi"
 *   reverseWords("")                      => ""
 *
 * Hint: Split by spaces, reverse the array, join with spaces.
 *       You can use .reverse() on an array to flip its order.
 *
 * Pattern: Split, transform, rejoin.
 */

// SOLUTION 1
// function reverseWords(str) {
//   let result = []
//   str.split(" ").forEach((word) => {
//     result.unshift(word)
//   })
//   return result.join(" ")
// }

// SOLUTION 2
function reverseWords(str) {
  return str.split(" ").reverse().join(" ")
}

module.exports = reverseWords;
