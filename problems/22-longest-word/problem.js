/**
 * Longest Word
 *
 * Given a sentence, return the longest word. If there's a tie, return
 * the first one. Ignore punctuation (only consider letters and numbers
 * as part of a word).
 *
 * Examples:
 *   longestWord("The quick brown fox")           => "quick"
 *   longestWord("I love JavaScript!")             => "JavaScript"
 *   longestWord("hi")                            => "hi"
 *   longestWord("one, two, three!")               => "three"
 *
 * Hint: Clean each word by removing non-alphanumeric characters first,
 *       then use the track-and-update pattern (like find max) but
 *       comparing word lengths.
 *
 * Pattern: Split + track and update.
 */

function longestWord(str) {
  let cleaned = str.replace(/[^a-zA-Z0-9\s-]/g, '').split(' ')
  let ans = ""
  for (let i = 0; i < cleaned.length; i++) {
    if (cleaned[i].length > ans.length) {
      ans = cleaned[i]
    }
  }
  return ans
}

longestWord("The quick brown fox")
longestWord("I love JavaScript!")
longestWord("hi")
longestWord("one, two, three!")

module.exports = longestWord;
