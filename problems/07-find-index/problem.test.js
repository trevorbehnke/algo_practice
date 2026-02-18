const findIndex = require("./problem");

describe("07 - Find Index", () => {
  test("finds value in the middle", () => {
    expect(findIndex([10, 20, 30, 40], 30)).toBe(2);
  });

  test("finds value at the start", () => {
    expect(findIndex([10, 20, 30], 10)).toBe(0);
  });

  test("finds value at the end", () => {
    expect(findIndex([10, 20, 30], 30)).toBe(2);
  });

  test("returns -1 when value not found", () => {
    expect(findIndex([1, 2, 3], 99)).toBe(-1);
  });

  test("returns -1 for empty array", () => {
    expect(findIndex([], 5)).toBe(-1);
  });

  test("works with strings", () => {
    expect(findIndex(["a", "b", "c"], "b")).toBe(1);
  });

  test("returns first occurrence when duplicates exist", () => {
    expect(findIndex([5, 3, 5, 3], 3)).toBe(1);
  });
});
