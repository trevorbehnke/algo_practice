/**
 * Spiral Edges
 *
 * Given a 2D matrix (array of arrays), return the elements along the
 * outer edge in clockwise order: top row left-to-right, right column
 * top-to-bottom, bottom row right-to-left, left column bottom-to-top.
 *
 * Examples:
 *   spiralEdges([
 *     [1,  2,  3],
 *     [4,  5,  6],
 *     [7,  8,  9]
 *   ]) => [1, 2, 3, 6, 9, 8, 7, 4]
 *
 *   spiralEdges([
 *     [1, 2],
 *     [3, 4]
 *   ]) => [1, 2, 4, 3]
 *
 *   spiralEdges([[1, 2, 3]]) => [1, 2, 3]
 *
 * Hint: Break it into 4 steps:
 *   1. Top row: loop left to right
 *   2. Right column: loop top+1 to bottom (skip the corner you already added)
 *   3. Bottom row: loop right-1 to left (only if more than 1 row)
 *   4. Left column: loop bottom-1 to top+1 (only if more than 1 column)
 *
 * Pattern: Matrix traversal — working with row/column indices.
 */

// INTENDED SOLUTION
function spiralEdges(matrix) {
  let result = []
  let rows = matrix.length
  let cols = matrix[0].length

  // Edge case: single column — go down to bottom, then back up
  if (cols === 1) {
    result.push(matrix[0][0])
    for (let i = rows - 1; i >= 1; i--) {
      result.push(matrix[i][0])
    }
    return result
  }

  // 1. Top row: left to right
  for (let i = 0; i < cols; i++) {
    result.push(matrix[0][i])
  }

  // 2. Right column: top+1 to bottom (only if more than 1 column)
  if (cols > 1) {
    for (let i = 1; i < rows; i++) {
      result.push(matrix[i][cols - 1])
    }
  }

  // 3. Bottom row: right-1 to left (only if more than 1 row)
  if (rows > 1) {
    for (let i = cols - 2; i >= 0; i--) {
      result.push(matrix[rows - 1][i])
    }
  }

  // 4. Left column: bottom-1 to top+1 (only if more than 1 column)
  if (cols > 1) {
    for (let i = rows - 2; i >= 1; i--) {
      result.push(matrix[i][0])
    }
  }

  return result
}

spiralEdges([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) // => [1, 2, 3, 6, 9, 8, 7, 4]

// spiralEdges([
//   [1, 2],
//   [3, 4]
// ]) // => [1, 2, 4, 3]

// spiralEdges([[1, 2, 3]]) // => [1, 2, 3]

module.exports = spiralEdges;
