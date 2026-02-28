/**
 * Title Case (Revisited)
 *
 * Convert a string to title case: capitalize the first letter of every
 * word, lowercase everything else.
 *
 * This is similar to problem 12 (capitalize words) and 19 (title case
 * with exceptions), but this time try solving it with .map() and .join()
 * instead of a for loop.
 *
 * Examples:
 *   titleCase("hello world")        => "Hello World"
 *   titleCase("javaScript is fun")  => "Javascript Is Fun"
 *   titleCase("a")                  => "A"
 *   titleCase("")                   => ""
 *
 * Hint: Split into words, map each word to: first char uppercase +
 *       rest lowercase, then join with spaces.
 *       word[0].toUpperCase() + word.slice(1).toLowerCase()
 *
 * Pattern: Split, transform, rejoin (practicing method chaining).
 */

function titleCase(str) {
  if (!str) return ""
  return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
}

titleCase("hello world")        // => "Hello World"
titleCase("javaScript is fun")  // => "Javascript Is Fun"
titleCase("a")                  // => "A"
titleCase("")                   // => ""

module.exports = titleCase;
