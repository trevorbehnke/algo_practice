/**
 * Title Case with Exceptions
 *
 * Given a sentence, capitalize the first letter of each word EXCEPT for
 * certain small words: "a", "an", "the", "and", "but", "or", "in", "on", "of".
 * The FIRST word of the sentence should ALWAYS be capitalized, even if
 * it's one of the exception words.
 *
 * Examples:
 *   titleCase("the lord of the rings")       => "The Lord of the Rings"
 *   titleCase("a tale of two cities")        => "A Tale of Two Cities"
 *   titleCase("war and peace")               => "War and Peace"
 *   titleCase("the")                         => "The"
 *
 * Hint: This builds on problem 12 (capitalize words) but adds a twist.
 *       You might want to put the exception words in an array and use
 *       Array.includes() to check if a word is in the list.
 *
 * Pattern: Split, transform with conditions, rejoin.
 */

function titleCase(str) {
  const WORDS = ["a", "an", "the", "and", "but", "or", "in", "on", "of"]
  let strArr = str.split(" ")
  let tempResult = []

  function capitalize(word) {
    tempResult.push(strArr[word].charAt(0).toUpperCase() + strArr[word].slice(1))
  }

  for (let i = 0; i < strArr.length; i++) {
    if (i === 0 && WORDS.includes(strArr[i])) {
      capitalize(i)
    } else if (WORDS.includes(strArr[i])) {
      tempResult.push(strArr[i])
    } else {
      capitalize(i)
    }
  }
  return tempResult.join(" ")
}

titleCase("the lord of the rings")
// titleCase("a tale of two cities")
// titleCase("war and peace")
// titleCase("the")

module.exports = titleCase;
