const missingNumber = require("./problem");

describe("29 - Missing Number", () => {
  test("finds missing number in middle", () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });

  test("finds missing number at end", () => {
    expect(missingNumber([0, 1])).toBe(2);
  });

  test("finds missing number in larger array", () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });

  test("handles smallest case", () => {
    expect(missingNumber([0])).toBe(1);
  });

  test("missing zero", () => {
    expect(missingNumber([1])).toBe(0);
  });

  test("finds missing in sequential array", () => {
    expect(missingNumber([0, 1, 2, 3, 5])).toBe(4);
  });
});
