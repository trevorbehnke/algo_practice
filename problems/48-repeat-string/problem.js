/**
 * Repeat String
 *
 * Given a string and a number n, return the string repeated n times.
 * Do NOT use the built-in .repeat() method — build it yourself with a loop.
 *
 * Examples:
 *   repeatString("ha", 3)    => "hahaha"
 *   repeatString("ab", 2)    => "abab"
 *   repeatString("x", 5)     => "xxxxx"
 *   repeatString("hi", 0)    => ""
 *   repeatString("", 10)     => ""
 *
 * Hint: Start with an empty string. Loop n times, adding the original
 *       string each time with +=.
 *
 * Pattern: Build and return (string accumulation).
 */

function repeatString(str, n) {
  let result = ""
  for (let i = 0; i < n; i++) {
    result += str
  }
  return result
}

repeatString("ha", 3)    // => "hahaha"
repeatString("ab", 2)    // => "abab"
repeatString("x", 5)     // => "xxxxx"
repeatString("hi", 0)    // => ""
repeatString("", 10)     // => ""

module.exports = repeatString;
