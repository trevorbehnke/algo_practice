const difference = require("./problem");

describe("37 - Difference Array", () => {
  test("removes elements found in second array", () => {
    expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
  });

  test("returns empty when all elements match", () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  test("returns all when no elements match", () => {
    expect(difference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
  });

  test("handles duplicates in first array", () => {
    expect(difference([1, 1, 2, 2], [1])).toEqual([2]);
  });

  test("handles empty first array", () => {
    expect(difference([], [1, 2])).toEqual([]);
  });

  test("handles empty second array", () => {
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test("works with strings", () => {
    expect(difference(["a", "b", "c"], ["b"])).toEqual(["a", "c"]);
  });
});
