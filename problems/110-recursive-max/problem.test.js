const recursiveMax = require("./problem");

describe("110 - Recursive Max", () => {
  test("mixed values", () => {
    expect(recursiveMax([3, 7, 2, 9, 4])).toBe(9);
  });

  test("single element", () => {
    expect(recursiveMax([1])).toBe(1);
  });

  test("all negative", () => {
    expect(recursiveMax([-5, -2, -8])).toBe(-2);
  });

  test("all same", () => {
    expect(recursiveMax([10, 10, 10])).toBe(10);
  });

  test("max at start", () => {
    expect(recursiveMax([99, 1, 2, 3])).toBe(99);
  });

  test("max at end", () => {
    expect(recursiveMax([1, 2, 3, 100])).toBe(100);
  });

  test("two elements", () => {
    expect(recursiveMax([5, 3])).toBe(5);
  });
});
