/**
 * Words Longer Than
 *
 * Given a sentence (string) and a number n, return an array of all
 * words that have more than n characters.
 *
 * Examples:
 *   wordsLongerThan("the quick brown fox jumps", 3)
 *     => ["quick", "brown", "jumps"]
 *
 *   wordsLongerThan("I am ok", 2)
 *     => []
 *
 *   wordsLongerThan("hello world", 4)
 *     => ["hello", "world"]
 *
 *   wordsLongerThan("", 1)
 *     => []
 *
 * Hint: Break the problem into two steps — getting the words,
 *       then keeping only the ones you want.
 */

function wordsLongerThan(str, n) {
    let result = []
    str.split(" ").forEach((word) => {
        if (word.length > n) result.push(word)
    })
    return result
}

module.exports = wordsLongerThan;
