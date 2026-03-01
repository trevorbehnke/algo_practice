/**
 * String Interleave
 *
 * Given two strings, interleave their characters — alternate one
 * character from each string. If one string is longer, append the
 * remaining characters at the end.
 *
 * Examples:
 *   interleave("abc", "123")     => "a1b2c3"
 *   interleave("ab", "1234")     => "a1b234"
 *   interleave("abcd", "12")     => "a1b2cd"
 *   interleave("", "abc")        => "abc"
 *   interleave("abc", "")        => "abc"
 *   interleave("", "")           => ""
 *
 * Hint: Loop up to the length of the LONGER string. On each iteration,
 *       add the character from str1 (if it exists) then the character
 *       from str2 (if it exists). Check with: if (i < str1.length).
 *
 * Pattern: Parallel traversal with uneven lengths.
 */

function interleave(str1, str2) {
  let result = ""
  let max = Math.max(str1.length, str2.length)
  for (let i = 0; i < max; i++) {
    if (i < str1.length) result += str1[i]
    if (i < str2.length) result += str2[i]
  }
  return result
}

interleave("abc", "123")     // => "a1b2c3"
interleave("ab", "1234")     // => "a1b234"
interleave("abcd", "12")     // => "a1b2cd"
interleave("", "abc")        // => "abc"
interleave("abc", "")        // => "abc"
interleave("", "")           // => ""

module.exports = interleave;
