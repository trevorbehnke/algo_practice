/**
 * Find Pattern Index
 *
 * Given an array of numbers, find the first index where a specific
 * pattern of relative changes occurs. The pattern is given as an array
 * of "up", "down", or "same" strings.
 *
 * "up" means the next element is greater than the current.
 * "down" means the next element is less than the current.
 * "same" means the next element is equal to the current.
 *
 * Return the starting index where the pattern first occurs, or -1.
 *
 * Examples:
 *   findPattern([1, 3, 2, 5, 4], ["up", "down"])          => 0
 *     (index 0: 1→3 is up, 3→2 is down ✓)
 *
 *   findPattern([1, 2, 3, 2, 1], ["up", "up", "down"])    => 0
 *
 *   findPattern([5, 3, 3, 1], ["down", "same"])            => 0
 *     (index 0: 5→3 is down, 3→3 is same ✓)
 *
 *   findPattern([1, 2, 3], ["down"])                       => -1
 *
 *   findPattern([], ["up"])                                => -1
 *
 * Hint: For each starting index i, check if the pattern matches starting
 *       there. Compare arr[i+j] and arr[i+j+1] for each step j in the
 *       pattern. If all steps match, return i.
 *
 *       To get the direction between two numbers:
 *       if (a < b) "up", if (a > b) "down", else "same"
 *
 * Pattern: Sliding comparison window — combines nested loops with logic.
 */

function findPattern(arr, pattern) {
  for (let i = 0; i < arr.length; i++) {
    let match = true
    for (let j = 0; j < pattern.length; j++) {
      let direction
      if (arr[i + j] < arr[i + j + 1]) direction = "up"
      else if (arr[i + j] > arr[i + j + 1]) direction = "down"
      else direction = "same"

      if (direction !== pattern[j]) {
        match = false
        break
      }
    }
    if (match) return i
  }
  return -1
}

findPattern([1, 3, 2, 5, 4], ["up", "down"])          // => 0
// (index 0: 1→3 is up, 3→2 is down ✓)

// findPattern([1, 2, 3, 2, 1], ["up", "up", "down"])    // => 0

// findPattern([5, 3, 3, 1], ["down", "same"])           // => 0
// (index 0: 5→3 is down, 3→3 is same ✓)

// findPattern([1, 2, 3], ["down"])                      // => -1

// findPattern([], ["up"])                               // => -1

module.exports = findPattern;
