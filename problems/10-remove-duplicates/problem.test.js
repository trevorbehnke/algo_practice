const removeDuplicates = require("./problem");

describe("10 - Remove Duplicates", () => {
  test("removes duplicate numbers", () => {
    expect(removeDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  test("removes duplicate strings", () => {
    expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  });

  test("handles array with no duplicates", () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("handles single element", () => {
    expect(removeDuplicates([1])).toEqual([1]);
  });

  test("handles empty array", () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  test("handles all duplicates", () => {
    expect(removeDuplicates([5, 5, 5, 5])).toEqual([5]);
  });

  test("preserves original order", () => {
    expect(removeDuplicates([3, 1, 2, 1, 3])).toEqual([3, 1, 2]);
  });
});
