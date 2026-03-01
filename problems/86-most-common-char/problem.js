/**
 * Most Common Character
 *
 * Given a string, return the character that appears most frequently.
 * If there's a tie, return the one that appears first in the string.
 * Ignore spaces. Case-insensitive.
 *
 * Examples:
 *   mostCommonChar("hello")            => "l"
 *   mostCommonChar("aabbbcc")          => "b"
 *   mostCommonChar("abc")              => "a"  (tie — first one wins)
 *   mostCommonChar("Hello World")      => "l"
 *   mostCommonChar("")                 => ""
 *
 * Hint: Build a frequency map (lowercase, skip spaces). Then loop
 *       through the original string to find the character with the
 *       highest count. Looping through the string (not the map) ensures
 *       the first occurrence wins ties.
 *
 * Pattern: Frequency map + find max (combines problems 4 and 16).
 */

function mostCommonChar(str) {
  let freq = {}
  let strArr = str.split("")
  // Build freq map
  strArr.forEach((letter) => {
    if (freq[letter] === undefined) {
      freq[letter] = 1
    } else {
      freq[letter]++
    }
  })
  // Loop through strArr to find max value
  let maxCount = 0
  let winner = ""
  strArr.forEach((letter) => {
    if (freq[letter] > maxCount) {
      maxCount = freq[letter]
      winner = letter
    }
  })
  return winner
}

mostCommonChar("hello")            // => "l"
mostCommonChar("aabbbcc")          // => "b"
mostCommonChar("abc")              // => "a"  (tie — first one wins)
mostCommonChar("Hello World")      // => "l"
mostCommonChar("")                 // => ""

module.exports = mostCommonChar;
