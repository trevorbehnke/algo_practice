const findMax = require("./problem");

describe("02 - Find Max", () => {
  test("finds max in a normal array", () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });

  test("finds max when it is the first element", () => {
    expect(findMax([10, 3, 5, 1])).toBe(10);
  });

  test("finds max when it is the last element", () => {
    expect(findMax([1, 2, 3, 7])).toBe(7);
  });

  test("handles single element array", () => {
    expect(findMax([42])).toBe(42);
  });

  test("handles all negative numbers", () => {
    expect(findMax([-1, -5, -3])).toBe(-1);
  });

  test("handles array with duplicates", () => {
    expect(findMax([3, 3, 3])).toBe(3);
  });

  test("handles mix of positive and negative", () => {
    expect(findMax([-10, 0, 5, -3, 8])).toBe(8);
  });
});
