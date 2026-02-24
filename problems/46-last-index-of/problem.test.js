const lastIndexOf = require("./problem");

describe("46 - Last Index Of", () => {
  test("finds last index of a number", () => {
    expect(lastIndexOf([1, 2, 3, 2, 1], 2)).toBe(3);
  });

  test("finds last index at end", () => {
    expect(lastIndexOf([1, 2, 3, 2, 1], 1)).toBe(4);
  });

  test("returns -1 when not found", () => {
    expect(lastIndexOf([1, 2, 3], 5)).toBe(-1);
  });

  test("works with strings", () => {
    expect(lastIndexOf(["a", "b", "a"], "a")).toBe(2);
  });

  test("empty array", () => {
    expect(lastIndexOf([], 1)).toBe(-1);
  });

  test("single element found", () => {
    expect(lastIndexOf([7], 7)).toBe(0);
  });

  test("only appears once", () => {
    expect(lastIndexOf([1, 2, 3], 2)).toBe(1);
  });
});
