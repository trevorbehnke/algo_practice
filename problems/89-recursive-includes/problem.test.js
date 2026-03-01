const recursiveIncludes = require("./problem");

describe("89 - Recursive Includes", () => {
  test("found in array", () => {
    expect(recursiveIncludes([1, 2, 3], 2)).toBe(true);
  });

  test("not found", () => {
    expect(recursiveIncludes([1, 2, 3], 5)).toBe(false);
  });

  test("works with strings", () => {
    expect(recursiveIncludes(["a", "b"], "b")).toBe(true);
  });

  test("empty array", () => {
    expect(recursiveIncludes([], 1)).toBe(false);
  });

  test("first element", () => {
    expect(recursiveIncludes([5, 10, 15], 5)).toBe(true);
  });

  test("last element", () => {
    expect(recursiveIncludes([5, 10, 15], 15)).toBe(true);
  });
});
