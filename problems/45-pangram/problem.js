/**
 * Pangram
 *
 * A pangram is a sentence that contains every letter of the alphabet
 * at least once. Given a string, return true if it is a pangram,
 * false otherwise. Case-insensitive.
 *
 * Examples:
 *   isPangram("The quick brown fox jumps over the lazy dog")  => true
 *   isPangram("Hello world")                                  => false
 *   isPangram("abcdefghijklmnopqrstuvwxyz")                   => true
 *   isPangram("")                                             => false
 *
 * Hint: Convert to lowercase. Build a "seen" object of all letters
 *       found in the string (skip non-letters). Then check if the
 *       object has 26 keys. You can check if a character is a letter
 *       with: char >= "a" && char <= "z"
 *
 * Pattern: Frequency map + validation check.
 */

function isPangram(str) {
  // Your code here
}

module.exports = isPangram;
