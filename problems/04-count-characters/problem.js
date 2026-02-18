/**
 * Count Characters
 *
 * Given a string, return an object where each key is a lowercase character
 * from the string and each value is how many times that character appears.
 * Ignore spaces and convert all letters to lowercase.
 *
 * Examples:
 *   countCharacters("hello")    => { h: 1, e: 1, l: 2, o: 1 }
 *   countCharacters("aAa")     => { a: 3 }
 *   countCharacters("hi hi")   => { h: 2, i: 2 }
 *   countCharacters("")        => {}
 *
 * This pattern (building a frequency map) comes up ALL the time in interviews.
 */

function countCharacters(str) {
  let map = {}
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    if (char === " ") continue
    if (!map[char]) {
      map[char] = 1
    } else {
      map[char] += 1
    }
  }
  return map
}

module.exports = countCharacters;
