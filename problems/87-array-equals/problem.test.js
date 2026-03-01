const arrayEquals = require("./problem");

describe("87 - Array Equals", () => {
  test("identical arrays", () => {
    expect(arrayEquals([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test("different values", () => {
    expect(arrayEquals([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  test("different lengths", () => {
    expect(arrayEquals([1, 2], [1, 2, 3])).toBe(false);
  });

  test("both empty", () => {
    expect(arrayEquals([], [])).toBe(true);
  });

  test("string arrays", () => {
    expect(arrayEquals(["a", "b"], ["a", "b"])).toBe(true);
  });

  test("same elements different order", () => {
    expect(arrayEquals([1, 2, 3], [3, 2, 1])).toBe(false);
  });
});
