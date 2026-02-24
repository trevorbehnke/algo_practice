/**
 * Range
 *
 * Given a start and end number, return an array of all numbers from
 * start to end (inclusive). If a step is provided, count by that amount.
 *
 * Examples:
 *   range(1, 5)        => [1, 2, 3, 4, 5]
 *   range(0, 10, 2)    => [0, 2, 4, 6, 8, 10]
 *   range(1, 1)        => [1]
 *   range(5, 10, 3)    => [5, 8]
 *
 * Hint: Default step to 1 if not provided. Remember i += step from
 *       Chunk Array (problem 13)?
 *
 * Pattern: Build and return with a step size.
 */

// SOLUTION 1
// function range(start, end, step = 1) {
//   let result = [start]
//   let i = start
//   while (i >= start && i + step <= end) {
//     result.push(i += step)
//   }
//   return result
// }

// SOLUTION 2
function range(start, end, step = 1) {
  let result = []
  for (let i = start; i <= end; i += step) {
    result.push(i)
  }
  return result
}

range(1, 5)        // => [1, 2, 3, 4, 5]
range(0, 10, 2)    // => [0, 2, 4, 6, 8, 10]
range(1, 1)        // => [1]
range(5, 10, 3)    // => [5, 8]

module.exports = range;
