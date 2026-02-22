const intersection = require("./problem");

describe("17 - Array Intersection", () => {
  test("finds common numbers", () => {
    expect(intersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
  });

  test("handles duplicates in input", () => {
    expect(intersection([1, 2, 2, 3], [2, 2, 3, 4])).toEqual([2, 3]);
  });

  test("returns empty when no overlap", () => {
    expect(intersection([1, 2], [3, 4])).toEqual([]);
  });

  test("works with strings", () => {
    expect(intersection(["a", "b", "c"], ["b", "c", "d"])).toEqual(["b", "c"]);
  });

  test("handles one empty array", () => {
    expect(intersection([], [1, 2, 3])).toEqual([]);
  });

  test("handles identical arrays", () => {
    expect(intersection([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("preserves order from first array", () => {
    expect(intersection([5, 3, 1], [1, 3, 5])).toEqual([5, 3, 1]);
  });
});
