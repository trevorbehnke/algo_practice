const range = require("./problem");

describe("36 - Range", () => {
  test("creates a simple range", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles step of 2", () => {
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]);
  });

  test("handles start equal to end", () => {
    expect(range(1, 1)).toEqual([1]);
  });

  test("handles step that doesn't divide evenly", () => {
    expect(range(5, 10, 3)).toEqual([5, 8]);
  });

  test("handles step of 5", () => {
    expect(range(0, 20, 5)).toEqual([0, 5, 10, 15, 20]);
  });

  test("handles range starting at negative", () => {
    expect(range(-3, 3)).toEqual([-3, -2, -1, 0, 1, 2, 3]);
  });
});
