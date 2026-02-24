const maxWindowSum = require("./problem");

describe("51 - Sliding Window Max", () => {
  test("window of 3", () => {
    expect(maxWindowSum([1, 3, 2, 5, 1, 1, 6], 3)).toBe(10);
  });

  test("window of 2", () => {
    expect(maxWindowSum([4, 2, 1, 7, 8, 1, 2], 2)).toBe(15);
  });

  test("window equals array length", () => {
    expect(maxWindowSum([1, 2, 3], 3)).toBe(6);
  });

  test("window of 1", () => {
    expect(maxWindowSum([5], 1)).toBe(5);
  });

  test("window of 1 picks the max element", () => {
    expect(maxWindowSum([3, 1, 4, 1, 5], 1)).toBe(5);
  });

  test("all same values", () => {
    expect(maxWindowSum([2, 2, 2, 2], 2)).toBe(4);
  });

  test("max is at the end", () => {
    expect(maxWindowSum([1, 1, 1, 1, 10, 10], 2)).toBe(20);
  });
});
