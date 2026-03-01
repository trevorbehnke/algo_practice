/**
 * Recursive Reverse
 *
 * Given a string, reverse it using RECURSION (no loops, no .reverse()).
 *
 * You solved this with a loop in problem 1. Now try it recursively.
 * Same idea as recursive sum (problem 78) but with strings.
 *
 * Examples:
 *   recursiveReverse("hello")  => "olleh"
 *   recursiveReverse("ab")     => "ba"
 *   recursiveReverse("a")      => "a"
 *   recursiveReverse("")       => ""
 *
 * Hint: Same two-part structure as recursiveSum:
 *   1. Base case: empty string → return ""
 *   2. Recursive case: take the LAST character and put it first,
 *      then recurse on everything EXCEPT the last character.
 *
 *   recursiveReverse("hello")
 *     = "o" + recursiveReverse("hell")
 *     = "o" + "l" + recursiveReverse("hel")
 *     = "o" + "l" + "l" + recursiveReverse("he")
 *     = "o" + "l" + "l" + "e" + recursiveReverse("h")
 *     = "o" + "l" + "l" + "e" + "h" + recursiveReverse("")
 *     = "o" + "l" + "l" + "e" + "h" + ""
 *     = "olleh"
 *
 *   Last char: str[str.length - 1]
 *   Everything else: str.slice(0, -1)
 *
 * Pattern: Recursion — last element + recurse on the rest.
 */

function recursiveReverse(str) {
  if (str.length === 0) return ""
  return str[str.length - 1] + recursiveReverse(str.slice(0, -1))
}

recursiveReverse("hello")  // => "olleh"
recursiveReverse("ab")     // => "ba"
recursiveReverse("a")      // => "a"
recursiveReverse("")       // => ""

module.exports = recursiveReverse;
