/**
 * Capitalize Words
 *
 * Given a sentence, return a new string where the first letter of every
 * word is capitalized. The rest of each word should be lowercase.
 *
 * Examples:
 *   capitalizeWords("hello world")        => "Hello World"
 *   capitalizeWords("jAVASCRIPT is FUN")  => "Javascript Is Fun"
 *   capitalizeWords("a")                  => "A"
 *   capitalizeWords("")                   => ""
 *
 * Hint: You can split a string into an array of words with str.split(" ").
 *       You can access the first char of a string with str[0] or str.charAt(0).
 *       str.toUpperCase() and str.toLowerCase() work on strings.
 *       You can join an array back into a string with arr.join(" ").
 *
 * Pattern: Split, transform each piece, rejoin.
 */

function capitalizeWords(str) {
  let strArr = str.split(" ")
  let result = []
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== "") {
      result.push(strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase())
    }
  }
  return result.join(" ")
}

capitalizeWords("hello world")

module.exports = capitalizeWords;
