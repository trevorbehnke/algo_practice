const recursiveSum = require("./problem");

describe("78 - Recursive Sum", () => {
  test("sums multiple numbers", () => {
    expect(recursiveSum([1, 2, 3, 4])).toBe(10);
  });

  test("single element", () => {
    expect(recursiveSum([5])).toBe(5);
  });

  test("empty array", () => {
    expect(recursiveSum([])).toBe(0);
  });

  test("two elements", () => {
    expect(recursiveSum([10, 20])).toBe(30);
  });

  test("includes negatives", () => {
    expect(recursiveSum([1, -1, 2, -2])).toBe(0);
  });
});
