const sumArray = require("./problem");

describe("06 - Sum Array", () => {
  test("sums a normal array", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  test("handles mix of positive and negative", () => {
    expect(sumArray([10, -5, 3])).toBe(8);
  });

  test("handles empty array", () => {
    expect(sumArray([])).toBe(0);
  });

  test("handles single element", () => {
    expect(sumArray([7])).toBe(7);
  });

  test("handles all zeros", () => {
    expect(sumArray([0, 0, 0])).toBe(0);
  });

  test("handles large numbers", () => {
    expect(sumArray([100, 200, 300])).toBe(600);
  });
});
