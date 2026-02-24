const firstDuplicate = require("./problem");

describe("43 - First Duplicate", () => {
  test("finds first duplicate number", () => {
    expect(firstDuplicate([1, 2, 3, 2, 1])).toBe(2);
  });

  test("returns null when no duplicates", () => {
    expect(firstDuplicate([1, 2, 3, 4])).toBe(null);
  });

  test("works with strings", () => {
    expect(firstDuplicate(["a", "b", "a"])).toBe("a");
  });

  test("adjacent duplicates", () => {
    expect(firstDuplicate([5, 5])).toBe(5);
  });

  test("empty array", () => {
    expect(firstDuplicate([])).toBe(null);
  });

  test("single element", () => {
    expect(firstDuplicate([1])).toBe(null);
  });

  test("multiple duplicates — returns the first one encountered", () => {
    expect(firstDuplicate([1, 3, 2, 3, 1])).toBe(3);
  });
});
