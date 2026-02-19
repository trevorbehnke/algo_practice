const maxSubarraySum = require("./problem");

describe("14 - Max Subarray Sum", () => {
  test("finds max sum of 2 consecutive", () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
  });

  test("finds max sum of 4 consecutive", () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
  });

  test("handles n of 1", () => {
    expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6);
  });

  test("returns null for empty array", () => {
    expect(maxSubarraySum([], 2)).toBe(null);
  });

  test("returns null when array is shorter than n", () => {
    expect(maxSubarraySum([1, 2], 3)).toBe(null);
  });

  test("handles n equal to array length", () => {
    expect(maxSubarraySum([3, 1, 2], 3)).toBe(6);
  });

  test("works with negative numbers", () => {
    expect(maxSubarraySum([1, -1, 5, 3, -2], 2)).toBe(8);
  });
});
