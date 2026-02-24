const matrixSum = require("./problem");

describe("34 - Matrix Sum", () => {
  test("sums a 2x2 matrix", () => {
    expect(matrixSum([[1, 2], [3, 4]])).toBe(10);
  });

  test("sums a 2x3 matrix", () => {
    expect(matrixSum([[1, 2, 3], [4, 5, 6]])).toBe(21);
  });

  test("handles single element", () => {
    expect(matrixSum([[10]])).toBe(10);
  });

  test("handles empty matrix", () => {
    expect(matrixSum([])).toBe(0);
  });

  test("handles rows of different lengths", () => {
    expect(matrixSum([[1], [2, 3], [4, 5, 6]])).toBe(21);
  });

  test("handles negative numbers", () => {
    expect(matrixSum([[1, -1], [-2, 2]])).toBe(0);
  });
});
