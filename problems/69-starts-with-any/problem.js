/**
 * Starts With Any
 *
 * Given a string and an array of prefixes, return true if the string
 * starts with ANY of the prefixes, false otherwise.
 *
 * Examples:
 *   startsWithAny("hello world", ["he", "hi", "ho"])     => true
 *   startsWithAny("goodbye", ["he", "hi", "ho"])         => false
 *   startsWithAny("interesting", ["inter", "intro"])     => true
 *   startsWithAny("test", [])                            => false
 *   startsWithAny("", ["a"])                             => false
 *
 * Hint: Loop through the prefixes array. For each prefix, check if
 *       the string starts with it using str.startsWith(prefix).
 *       If any match, return true immediately. If the loop finishes,
 *       return false.
 *
 * Pattern: Early return on match (like firstDuplicate, problem 43).
 */

function startsWithAny(str, prefixes) {
  // Your code here
}

module.exports = startsWithAny;
