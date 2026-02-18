/**
 * Is Palindrome
 *
 * Given a string, return true if it reads the same forwards and backwards,
 * ignoring case. Only consider letters and numbers (ignore spaces, punctuation).
 *
 * Examples:
 *   isPalindrome("racecar")           => true
 *   isPalindrome("hello")             => false
 *   isPalindrome("A man a plan a canal Panama") => true
 *   isPalindrome("")                  => true
 *
 * Hint: Think about using two pointers — one at the start, one at the end.
 */

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "")
  for (let i = 0; i < str.length / 2; i++) {
    let p1 = str[i]
    let p2 = str[str.length - 1 - i]
    if (p1 !== p2) {
      return false
    }
  }
  return true
}

isPalindrome("A man a plan a canal Panama")

module.exports = isPalindrome;
