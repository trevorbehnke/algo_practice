const isSorted = require("./problem");

describe("18 - Is Sorted", () => {
  test("returns true for sorted array", () => {
    expect(isSorted([1, 2, 3, 4])).toBe(true);
  });

  test("returns false for unsorted array", () => {
    expect(isSorted([1, 3, 2, 4])).toBe(false);
  });

  test("handles equal neighbors", () => {
    expect(isSorted([1, 1, 2, 2])).toBe(true);
  });

  test("handles single element", () => {
    expect(isSorted([5])).toBe(true);
  });

  test("handles empty array", () => {
    expect(isSorted([])).toBe(true);
  });

  test("detects unsorted at the end", () => {
    expect(isSorted([1, 2, 3, 1])).toBe(false);
  });

  test("handles descending order", () => {
    expect(isSorted([4, 3, 2, 1])).toBe(false);
  });
});
