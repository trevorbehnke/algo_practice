const spiralEdges = require("./problem");

describe("40 - Spiral Edges", () => {
  test("3x3 matrix", () => {
    expect(spiralEdges([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])).toEqual([1, 2, 3, 6, 9, 8, 7, 4]);
  });

  test("2x2 matrix", () => {
    expect(spiralEdges([
      [1, 2],
      [3, 4]
    ])).toEqual([1, 2, 4, 3]);
  });

  test("single row", () => {
    expect(spiralEdges([[1, 2, 3]])).toEqual([1, 2, 3]);
  });

  test("single column", () => {
    expect(spiralEdges([[1], [2], [3]])).toEqual([1, 3, 2]);
  });

  test("single element", () => {
    expect(spiralEdges([[5]])).toEqual([5]);
  });

  test("4x4 matrix", () => {
    expect(spiralEdges([
      [1,  2,  3,  4],
      [5,  6,  7,  8],
      [9,  10, 11, 12],
      [13, 14, 15, 16]
    ])).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5]);
  });
});
