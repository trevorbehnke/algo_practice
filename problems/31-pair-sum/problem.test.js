const pairSum = require("./problem");

describe("31 - Pair Sum", () => {
  test("finds a pair that sums to target", () => {
    expect(pairSum([1, 2, 3, 4], 5)).toBe(true);
  });

  test("returns false when no pair exists", () => {
    expect(pairSum([1, 2, 3, 4], 10)).toBe(false);
  });

  test("handles duplicate values", () => {
    expect(pairSum([5, 5], 10)).toBe(true);
  });

  test("returns false for single element", () => {
    expect(pairSum([1], 2)).toBe(false);
  });

  test("returns false for empty array", () => {
    expect(pairSum([], 0)).toBe(false);
  });

  test("handles negative numbers", () => {
    expect(pairSum([-1, 2, 3, -4], -5)).toBe(true);
  });

  test("handles zero target", () => {
    expect(pairSum([-3, 1, 3, 2], 0)).toBe(true);
  });
});
