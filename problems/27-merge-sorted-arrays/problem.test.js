const mergeSorted = require("./problem");

describe("27 - Merge Sorted Arrays", () => {
  test("merges two equal-length arrays", () => {
    expect(mergeSorted([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("merges different-length arrays", () => {
    expect(mergeSorted([1, 2], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles empty first array", () => {
    expect(mergeSorted([], [1, 2])).toEqual([1, 2]);
  });

  test("handles empty second array", () => {
    expect(mergeSorted([1], [])).toEqual([1]);
  });

  test("handles both empty", () => {
    expect(mergeSorted([], [])).toEqual([]);
  });

  test("handles interleaved values", () => {
    expect(mergeSorted([1, 4, 7], [2, 3, 5, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("handles duplicate values across arrays", () => {
    expect(mergeSorted([1, 3, 3], [2, 3, 4])).toEqual([1, 2, 3, 3, 3, 4]);
  });
});
