/**
 * Word Frequency
 *
 * Given a sentence, return an object where each key is a word (lowercase)
 * and each value is how many times that word appears.
 *
 * Examples:
 *   wordFrequency("the cat and the dog")  => { the: 2, cat: 1, and: 1, dog: 1 }
 *   wordFrequency("hello hello hello")    => { hello: 3 }
 *   wordFrequency("one")                 => { one: 1 }
 *   wordFrequency("")                    => {}
 *
 * Hint: This is the same as Count Characters (problem 04) but with words
 *       instead of characters. Split the string, then build a frequency map.
 *
 * Pattern: Split + frequency map.
 */

function wordFrequency(str) {
  let map = {}
  if (str) {
    let cleaned = str.toLowerCase().split(" ")
    cleaned.forEach((word) => {
      !map[word] ? map[word] = 1 : map[word]++
    })
  }
  return map
}

wordFrequency("the cat and the dog")
wordFrequency("hello hello hello")
wordFrequency("one")
wordFrequency("")

module.exports = wordFrequency;
