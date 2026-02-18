/**
 * Truncate String
 *
 * Given a string and a max length, truncate the string to that length.
 * If the string was truncated, add "..." to the end.
 * If the string is already shorter than or equal to max length, return it as-is.
 *
 * Note: The "..." counts toward the max length!
 *
 * Examples:
 *   truncate("Hello World", 5)    => "He..."
 *   truncate("Hello World", 11)   => "Hello World"
 *   truncate("Hello World", 20)   => "Hello World"
 *   truncate("abcdef", 6)         => "abcdef"
 *   truncate("abcdef", 4)         => "a..."
 *
 * Constraints:
 *   - max will always be >= 3
 *
 * Pattern: Conditional logic with string building.
 */

function truncate(str, max) {
  if (max >= str.length) {
    return str
  } else {
    return str.slice(0, max - 3) + "..."
  }
}

module.exports = truncate;
