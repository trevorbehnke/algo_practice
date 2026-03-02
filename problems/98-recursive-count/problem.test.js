const recursiveCount = require("./problem");

describe("98 - Recursive Count", () => {
  test("multiple occurrences", () => {
    expect(recursiveCount([1, 2, 3, 2, 2], 2)).toBe(3);
  });

  test("no occurrences", () => {
    expect(recursiveCount([1, 2, 3], 4)).toBe(0);
  });

  test("empty array", () => {
    expect(recursiveCount([], 1)).toBe(0);
  });

  test("string values", () => {
    expect(recursiveCount(["a", "b", "a"], "a")).toBe(2);
  });

  test("all match", () => {
    expect(recursiveCount([5, 5, 5], 5)).toBe(3);
  });

  test("single element match", () => {
    expect(recursiveCount([7], 7)).toBe(1);
  });

  test("single element no match", () => {
    expect(recursiveCount([7], 3)).toBe(0);
  });
});
