/**
 * Character Frequency Sort
 *
 * Given a string, return a new string with characters sorted by how
 * frequently they appear (most frequent first). Characters with the
 * same frequency can appear in any order.
 *
 * Examples:
 *   frequencySort("tree")      => "eert" or "eetr"
 *   frequencySort("cccaaa")    => "cccaaa" or "aaaccc"
 *   frequencySort("Aabb")      => "bbAa" or "aaBb"
 *   frequencySort("a")         => "a"
 *   frequencySort("")          => ""
 *
 * Hint: Two steps:
 *   1. Build a frequency map (you've done this many times)
 *   2. Sort the characters by their frequency (highest first),
 *      then rebuild the string. You can use Object.entries() to
 *      get [char, count] pairs, sort by count, then repeat each
 *      char by its count.
 *
 * Pattern: Frequency map + sort + rebuild.
 */

function frequencySort(str) {
  let result = ""
  let map = {}
  // Frequency map
  str.split("").forEach((val) => {
    map[val] === undefined ? map[val] = 1 : map[val]++
  })
  // Sort chars by frequency
  const sortedObject = Object.fromEntries(
    Object.entries(map).sort(([, a], [, b]) => b - a)
  );
  // Rebuild string
  for (const key in sortedObject) {
    result += key.repeat(sortedObject[key])
  }
  return result
}

frequencySort("tree")      // => "eert" or "eetr"
frequencySort("cccaaa")    // => "cccaaa" or "aaaccc"
frequencySort("Aabb")      // => "bbAa" or "aaBb"
frequencySort("a")         // => "a"
frequencySort("")          // => ""

module.exports = frequencySort;
