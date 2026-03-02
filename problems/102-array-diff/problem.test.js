const arrayDiff = require("./problem");

describe("102 - Array Diff", () => {
  test("removes elements found in second array", () => {
    expect(arrayDiff([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
  });

  test("all elements removed", () => {
    expect(arrayDiff([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  test("nothing to remove", () => {
    expect(arrayDiff([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test("empty first array", () => {
    expect(arrayDiff([], [1, 2])).toEqual([]);
  });

  test("duplicates in first array removed from result", () => {
    expect(arrayDiff([1, 1, 2, 2, 3], [2])).toEqual([1, 3]);
  });

  test("string values", () => {
    expect(arrayDiff(["a", "b", "c"], ["b"])).toEqual(["a", "c"]);
  });

  test("no overlap", () => {
    expect(arrayDiff([1, 2], [3, 4])).toEqual([1, 2]);
  });
});
