const commonThree = require("./problem");

describe("94 - Common Elements (Three Arrays)", () => {
  test("one common element", () => {
    expect(commonThree([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([3]);
  });

  test("no common elements", () => {
    expect(commonThree([1, 2], [2, 3], [3, 4])).toEqual([]);
  });

  test("strings", () => {
    expect(commonThree(["a", "b", "c"], ["b", "c"], ["c", "d"])).toEqual(["c"]);
  });

  test("all same", () => {
    expect(commonThree([1, 2, 3], [1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("empty array", () => {
    expect(commonThree([], [1, 2], [2, 3])).toEqual([]);
  });

  test("duplicates in input", () => {
    expect(commonThree([1, 1, 2], [1, 2, 2], [1, 1, 1])).toEqual([1]);
  });
});
