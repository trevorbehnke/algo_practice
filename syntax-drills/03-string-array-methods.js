/**
 * SYNTAX DRILL: String & Array Methods
 *
 * Get fluent with the built-in methods you'll use constantly.
 * Each function is 1-3 lines max. Use the method indicated in the hint.
 */

// 1. Return the first 3 characters of a string
function firstThree(str) {
  // firstThree("hello") => "hel"
  // Hint: .slice()
  return str.slice(0, 3)
}

// 2. Return everything after the first character
function allButFirst(str) {
  // allButFirst("hello") => "ello"
  // Hint: .slice()
  return str.slice(1)
}

// 3. Split a sentence into an array of words
function toWords(str) {
  // toWords("hello world") => ["hello", "world"]
  // Hint: .split()
  return str.split(" ")
}

// 4. Join an array of words into a sentence with dashes between them
function dashJoin(arr) {
  // dashJoin(["a", "b", "c"]) => "a-b-c"
  // Hint: .join()
  return arr.join("-")
}

// 5. Return true if the array contains the value
function hasValue(arr, val) {
  // hasValue([1, 2, 3], 2)  => true
  // hasValue([1, 2, 3], 5)  => false
  // Hint: .includes()
  return arr.includes(val) ? true : false
}

// 6. Return the string with all whitespace removed
function removeSpaces(str) {
  // removeSpaces("h e l l o") => "hello"
  // Hint: .replace() or .split().join()
  return str.replace(/\s/g, "")
  // return str.split(" ").join("")
}

// 7. Return a new array with the value added to the end (don't modify the original)
function addToEnd(arr, val) {
  // addToEnd([1, 2], 3) => [1, 2, 3]
  // Hint: spread operator [...arr, val] or .concat()
  return [...arr, val]
}

// 8. Return a new array with the last element removed (don't modify the original)
function removeLast(arr) {
  // removeLast([1, 2, 3]) => [1, 2]
  // Hint: .slice()
  return [...arr.slice(0, -1)]
}

// 9. Return the string repeated n times
function repeatStr(str, n) {
  // repeatStr("ha", 3) => "hahaha"
  // Hint: .repeat()
  return str.repeat(n)
}

// 10. Return the array sorted in ascending order (numbers)
function sortNums(arr) {
  // sortNums([3, 1, 2]) => [1, 2, 3]
  // Hint: .sort() with a compare function (a, b) => a - b
  // Without the compare function, .sort() sorts as strings ("10" < "2")!
  return arr.sort((a, b) => a - b)
}

// 11. Return the index of the first occurrence of char in the string, or -1
function findChar(str, char) {
  // findChar("hello", "l") => 2
  // findChar("hello", "z") => -1
  // Hint: .indexOf()
  return str.indexOf(char)
}

// 12. Return the string with the first occurrence of `from` replaced with `to`
function replaceFirst(str, from, to) {
  // replaceFirst("hello world", "world", "there") => "hello there"
  // Hint: .replace()
  return str.replace(from, to)
}

module.exports = {
  firstThree, allButFirst, toWords, dashJoin, hasValue, removeSpaces,
  addToEnd, removeLast, repeatStr, sortNums, findChar, replaceFirst
};
