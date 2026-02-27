/**
 * Matrix Transpose
 *
 * Given a 2D matrix, return its transpose — rows become columns and
 * columns become rows.
 *
 * Examples:
 *   transpose([
 *     [1, 2, 3],
 *     [4, 5, 6]
 *   ])
 *   => [
 *     [1, 4],
 *     [2, 5],
 *     [3, 6]
 *   ]
 *
 *   transpose([[1, 2], [3, 4], [5, 6]])
 *   => [[1, 3, 5], [2, 4, 6]]
 *
 *   transpose([[1]])
 *   => [[1]]
 *
 * Hint: The result has as many rows as the original has columns.
 *       Create the result array first. Then loop through the original:
 *       result[col][row] = matrix[row][col]
 *
 *       Outer loop: columns of original (0 to matrix[0].length - 1)
 *       Inner loop: rows of original (0 to matrix.length - 1)
 *       Push matrix[row][col] into result[col]
 *
 * Pattern: Nested loop — matrix transformation.
 */

function transpose(matrix) {
  let result = []
  let rows = matrix.length
  let columns = matrix[0].length
  for (let i = 0; i < columns; i++) {
    let newRow = []
    for (let j = 0; j < rows; j++) {
      newRow.push(matrix[j][i])
    }
    result.push(newRow)
  }
  return result
}

transpose([
  [1, 2, 3],
  [4, 5, 6]
])
// => [[1, 4],[2, 5],[3, 6]

// transpose([[1, 2], [3, 4], [5, 6]])
// => [[1, 3, 5], [2, 4, 6]]

// transpose([[1]])
// => [[1]]

module.exports = transpose;
