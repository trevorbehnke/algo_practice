const transpose = require("./problem");

describe("57 - Matrix Transpose", () => {
  test("2x3 matrix", () => {
    expect(transpose([
      [1, 2, 3],
      [4, 5, 6],
    ])).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });

  test("3x2 matrix", () => {
    expect(transpose([[1, 2], [3, 4], [5, 6]])).toEqual([
      [1, 3, 5],
      [2, 4, 6],
    ]);
  });

  test("1x1 matrix", () => {
    expect(transpose([[1]])).toEqual([[1]]);
  });

  test("square matrix", () => {
    expect(transpose([
      [1, 2],
      [3, 4],
    ])).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });

  test("single row", () => {
    expect(transpose([[1, 2, 3]])).toEqual([[1], [2], [3]]);
  });

  test("single column", () => {
    expect(transpose([[1], [2], [3]])).toEqual([[1, 2, 3]]);
  });
});
