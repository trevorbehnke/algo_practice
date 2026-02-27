/**
 * Longest Common Prefix
 *
 * Given an array of strings, return the longest common prefix shared
 * by all strings. If there is no common prefix, return "".
 *
 * Examples:
 *   longestPrefix(["flower", "flow", "flight"])   => "fl"
 *   longestPrefix(["dog", "racecar", "car"])      => ""
 *   longestPrefix(["interstellar", "internet", "internal"])  => "inter"
 *   longestPrefix(["abc"])                        => "abc"
 *   longestPrefix([])                             => ""
 *
 * Hint: Start with the first string as your prefix. Then compare it
 *       against each subsequent string, shortening the prefix until
 *       it matches the start of that string.
 *
 *       For each string: while the string doesn't start with prefix,
 *       chop the last character off the prefix.
 *       You can use str.startsWith(prefix) to check.
 *
 * Pattern: Iterative narrowing.
 */

function longestPrefix(strs) {
  let prefix;
  strs.length ? prefix = strs[0] : prefix = ""
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1)
    }
  }
  return prefix
}


longestPrefix(["flower", "flow", "flight"])              // => "fl"
longestPrefix(["dog", "racecar", "car"])                 // => ""
longestPrefix(["interstellar", "internet", "internal"])  // => "inter"
longestPrefix(["abc"])                                   // => "abc"
longestPrefix([])                                        // => ""

module.exports = longestPrefix;
