const twoSum = require("./problem");

describe("05 - Two Sum", () => {
  test("finds two numbers that add to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("finds pair in the middle of array", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("handles duplicate values", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test("works with negative numbers", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  test("works with a larger array", () => {
    expect(twoSum([1, 5, 8, 3, 9, 2], 7)).toEqual([1, 5]);
  });
});
