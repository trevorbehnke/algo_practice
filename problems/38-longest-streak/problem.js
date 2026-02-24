/**
 * Longest Streak
 *
 * Given a string, return the length of the longest streak of the same
 * character in a row.
 *
 * Examples:
 *   longestStreak("aaabbb")      => 3
 *   longestStreak("aabbbcccc")   => 4
 *   longestStreak("abcde")       => 1
 *   longestStreak("aaa")         => 3
 *   longestStreak("")            => 0
 *   longestStreak("a")           => 1
 *
 * Hint: Walk through the string tracking the current streak length.
 *       When the character changes, compare the current streak to
 *       the max and reset. Similar to string compression (problem 28)
 *       but you're just tracking the longest count.
 *
 * Pattern: Track and update with consecutive comparison.
 */

function longestStreak(str) {
  let streak = 1
  let max = 0

  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      streak++
    } else {
      if (streak > max) {
        max = streak
      }
      streak = 1
    }
  }
  return max
}

longestStreak("aaabbb")      // => 3
longestStreak("aabbbcccc")   // => 4
longestStreak("abcde")       // => 1
longestStreak("aaa")         // => 3
longestStreak("")            // => 0
longestStreak("a")           // => 1

module.exports = longestStreak;
