/**
 * Count Words By Length
 *
 * Given a sentence, return an object where the keys are word lengths
 * and the values are how many words have that length.
 *
 * Examples:
countWordsByLength("I am a dog")
 *     => { 1: 2, 2: 1, 3: 1 }
 *
 *   countWordsByLength("hello world")
 *     => { 5: 2 }
 *
 *   countWordsByLength("the quick brown fox")
 *     => { 3: 2, 5: 2 }
 *
 *   countWordsByLength("")
 *     => {}
 *
 * Hint: Two familiar steps — break the string apart, then
 *       count something about each piece.
 */

function countWordsByLength(str) {
    let result = {}
    if (str.length === 0) return {}
    str.split(" ").forEach((word) => {
        result[word.length] === undefined ? result[word.length] = 1 : result[word.length]++
    })
    return result
}

countWordsByLength("I am a dog")
//  => { 1: 2, 2: 1, 3: 1 }

module.exports = countWordsByLength;
