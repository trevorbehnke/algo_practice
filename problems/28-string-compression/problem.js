/**
 * String Compression
 *
 * Given a string, compress it by replacing consecutive repeated characters
 * with the character followed by its count. Only compress if the count is
 * greater than 1. If the compressed string is not shorter than the original,
 * return the original.
 *
 * Examples:
 *   compress("aaabbc")       => "a3b2c"
 *   compress("aabbcc")       => "aabbcc"  (compressed "a2b2c2" is same length)
 *   compress("aaaa")         => "a4"
 *   compress("abc")          => "abc"
 *   compress("aabbaabb")     => "aabbaabb" (compressed "a2b2a2b2" is same length)
 *   compress("")             => ""
 *
 * Hint: Walk through the string. Keep track of the current character and
 *       how many times it repeats. When the character changes (or you reach
 *       the end), add the character + count to your result.
 *
 * Pattern: Build and return with tracking.
 */

function compress(str) {
  let result = ""
  let count = 1

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++
    } else {
      result += str[i]
      if (count > 1) result += count
      count = 1
    }
  }

  return result.length < str.length ? result : str
}

compress("aaabbc")
compress("aabbcc")
compress("aaaa")
compress("abc")
compress("aabbaabb")
compress("")

module.exports = compress;
