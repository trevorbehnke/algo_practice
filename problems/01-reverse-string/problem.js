/**
 * Reverse String
 *
 * Given a string, return a new string with the characters in reverse order.
 *
 * Examples:
 *   reverseString("hello")  => "olleh"
 *   reverseString("abc")    => "cba"
 *   reverseString("")       => ""
 *   reverseString("a")      => "a"
 *
 * Constraints:
 *   - Do NOT use the built-in Array.reverse() method.
 *   - Try to solve it with a loop.
 */

function reverseString(str) {
  let newStr = ""
  for (let i = 0; i < str.length; i++) {
    newStr += str[str.length - 1 - i]
  }
  return newStr
}

console.log(reverseString("Trevor"))
module.exports = reverseString;
