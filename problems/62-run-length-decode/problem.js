/**
 * Run-Length Decode
 *
 * You solved run-length ENCODING in problem 28 (string compression).
 * Now do the reverse: given an encoded string, decode it back.
 *
 * The format is: each character is preceded by its count.
 * Single characters have no number prefix.
 *
 * Examples:
 *   rleDecode("3a2b1c")   => "aaabbc"
 *   rleDecode("2x3y")     => "xxyyy"  
 *   rleDecode("abc")      => "abc"     (no numbers = count of 1 each)
 *   rleDecode("10a")      => "aaaaaaaaaa"  (10 a's)
 *   rleDecode("")          => ""
 *
 * Hint: Walk through the string character by character. If the current
 *       character is a digit, build up a number (it could be multi-digit
 *       like "10"). When you hit a letter, repeat it by the accumulated
 *       number (or 1 if no number was built). Then reset the number.
 *
 *       Check if a character is a digit: char >= "0" && char <= "9"
 *
 * Pattern: State machine — track a number as you scan through a string.
 */

function rleDecode(str) {
  let result = ""
  let count = 0
  let regex = /\d/;
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      // Accumulate number digit by digit
      count = count * 10 + Number(str[i])
    }
    else {
      count === 0 ? result += str[i] : result += str[i].repeat(count)
      count = 0
    }
  }
  return result
}

rleDecode("3a2b1c")   // => "aaabbc"
rleDecode("2x3y")     // => "xxyyy"  
rleDecode("abc")      // => "abc"     (no numbers = count of 1 each)
rleDecode("10a")      // => "aaaaaaaaaa"  (10 a's)
rleDecode("")         // => ""

module.exports = rleDecode;
