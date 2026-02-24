/**
 * Matrix Sum
 *
 * Given a 2D array (array of arrays) of numbers, return the sum of
 * all numbers. Each inner array is a "row" of the matrix.
 *
 * Examples:
 *   matrixSum([[1, 2], [3, 4]])           => 10
 *   matrixSum([[1, 2, 3], [4, 5, 6]])     => 21
 *   matrixSum([[10]])                     => 10
 *   matrixSum([])                         => 0
 *
 * Hint: This is just like Flatten Array (problem 15) but instead of
 *       pushing elements, you add them to a sum. Nested loop!
 *
 * Pattern: Nested loop + sum (combines problems 06 and 15).
 */

function matrixSum(matrix) {
  let sum = 0
  matrix.forEach((arr) => {
    arr.forEach((num) => {
      sum += num
    })
  })
  return sum
}

matrixSum([[1, 2], [3, 4]])
matrixSum([[1, 2, 3], [4, 5, 6]])
matrixSum([[10]])
matrixSum([])

module.exports = matrixSum;
