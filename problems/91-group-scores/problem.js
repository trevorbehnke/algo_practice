/**
 * Group Scores
 *
 * Given an array of objects with "name" and "score" properties, return
 * an object where each name maps to an array of all their scores.
 *
 * Examples:
 *   groupScores([
 *     { name: "Alice", score: 90 },
 *     { name: "Bob", score: 80 },
 *     { name: "Alice", score: 95 },
 *     { name: "Bob", score: 85 }
 *   ])
 *   => { Alice: [90, 95], Bob: [80, 85] }
 *
 *   groupScores([{ name: "Eve", score: 100 }])
 *   => { Eve: [100] }
 *
 *   groupScores([])
 *   => {}
 *
 * Hint: Think about which pattern you've used before where you group
 *       things by a key and collect values into arrays.
 */

function groupScores(arr) {
  let result = {}
  arr.forEach(({ name, score }) => {
    if (result[name] === undefined) {
      result[name] = []
    }
    result[name].push(score)
  })
  return result
}

groupScores([
  { name: "Alice", score: 90 },
  { name: "Bob", score: 80 },
  { name: "Alice", score: 95 },
  { name: "Bob", score: 85 }
])
// => { Alice: [90, 95], Bob: [80, 85] }

groupScores([{ name: "Eve", score: 100 }])
// => { Eve: [100] }

groupScores([])
// => {}

module.exports = groupScores;
