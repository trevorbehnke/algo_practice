/**
 * Count Vowels and Consonants
 *
 * Given a string, return an object with two keys: "vowels" and "consonants",
 * each containing the count of vowels and consonants in the string.
 * Ignore spaces, numbers, and punctuation. Vowels are a, e, i, o, u.
 * Case insensitive.
 *
 * Examples:
 *   countVC("hello")       => { vowels: 2, consonants: 3 }
 *   countVC("aeiou")       => { vowels: 5, consonants: 0 }
 *   countVC("xyz")         => { vowels: 0, consonants: 3 }
 *   countVC("Hello World") => { vowels: 3, consonants: 7 }
 *   countVC("")            => { vowels: 0, consonants: 0 }
 *
 * Hint: Create a string or array of vowels and use .includes() to check
 *       if a character is a vowel. Use a regex or check to confirm
 *       a character is a letter before counting it.
 *
 * Pattern: Categorize and count.
 */

function countVC(str) {
  const vowelList = "aeiou"
  const cleaned = str.replace(/[^a-zA-Z]/g, '').toLowerCase()
  let map = { vowels: 0, consonants: 0 }
  for (let i = 0; i < cleaned.length; i++) {
    if (vowelList.includes(cleaned[i])) {
      map.vowels++
    } else {
      map.consonants++
    }
  }
  console.log(map)
  return map
}

countVC("hello")
countVC("aeiou")
countVC("xyz")
countVC("Hello World")
countVC("")

module.exports = countVC;
