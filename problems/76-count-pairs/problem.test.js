const countPairs = require("./problem");

describe("76 - Count Pairs", () => {
  test("basic pairs", () => {
    expect(countPairs([1, 2, 3, 4, 5], 6)).toBe(2);
  });

  test("duplicate elements", () => {
    expect(countPairs([1, 1, 1, 1], 2)).toBe(2);
  });

  test("no pairs", () => {
    expect(countPairs([1, 2, 3], 10)).toBe(0);
  });

  test("all same summing to target", () => {
    expect(countPairs([3, 3, 3, 3], 6)).toBe(2);
  });

  test("empty array", () => {
    expect(countPairs([], 5)).toBe(0);
  });

  test("single element", () => {
    expect(countPairs([5], 5)).toBe(0);
  });

  test("multiple valid pairs", () => {
    expect(countPairs([1, 5, 7, -1, 5], 6)).toBe(2);
  });
});
