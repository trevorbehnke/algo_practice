/**
 * Are Anagrams
 *
 * Given two strings, return true if they are anagrams of each other.
 * An anagram uses the exact same characters the exact same number of times,
 * just in a different order. Ignore case and spaces.
 *
 * Examples:
 *   areAnagrams("listen", "silent")    => true
 *   areAnagrams("hello", "world")      => false
 *   areAnagrams("Dormitory", "Dirty Room") => true
 *   areAnagrams("aab", "bba")          => false
 *
 * Hint: You solved a very similar sub-problem in problem 04...
 *
 * Pattern: Frequency map (same as count characters).
 */

// Solution 1
function areAnagrams(str1, str2) {
  let cleanStr1 = str1.replace(/ /g, '').toLowerCase()
  let cleanStr2 = str2.replace(/ /g, '').toLowerCase()
  let map1 = {}
  let map2 = {}
  if (cleanStr1.length === cleanStr2.length) {
    for (let i = 0; i < cleanStr1.length; i++) {
      if (map1[cleanStr1[i]]) {
        map1[cleanStr1[i]]++
      } else {
        map1[cleanStr1[i]] = 1
      }
    }
    for (let i = 0; i < cleanStr2.length; i++) {
      if (map2[cleanStr2[i]]) {
        map2[cleanStr2[i]]++
      } else {
        map2[cleanStr2[i]] = 1
      }
    }
    for (const key in map1) {
      console.log(map1[key])
      if (map1[key] !== map2[key]) {
        return false
      }
    }
    return true
  } else {
    return false
  }
}

// Solution 2

areAnagrams("Dormitory", "Dirty Room")

module.exports = areAnagrams;
