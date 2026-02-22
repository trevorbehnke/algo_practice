const mostFrequent = require("./problem");

describe("16 - Most Frequent Element", () => {
  test("finds most frequent number", () => {
    expect(mostFrequent([1, 2, 3, 2, 2, 1])).toBe(2);
  });

  test("finds most frequent string", () => {
    expect(mostFrequent(["a", "b", "a"])).toBe("a");
  });

  test("handles single element", () => {
    expect(mostFrequent([5])).toBe(5);
  });

  test("returns first in case of tie", () => {
    expect(mostFrequent([1, 1, 2, 2, 3])).toBe(1);
  });

  test("handles all same elements", () => {
    expect(mostFrequent([7, 7, 7])).toBe(7);
  });

  test("handles tie with strings", () => {
    expect(mostFrequent(["x", "y", "x", "y"])).toBe("x");
  });
});
