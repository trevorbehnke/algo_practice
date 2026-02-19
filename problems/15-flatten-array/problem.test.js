const flatten = require("./problem");

describe("15 - Flatten Array", () => {
  test("flattens multiple sub-arrays", () => {
    expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test("flattens single-element sub-arrays", () => {
    expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3]);
  });

  test("works with strings", () => {
    expect(flatten([["a", "b"], ["c"]])).toEqual(["a", "b", "c"]);
  });

  test("handles empty array", () => {
    expect(flatten([])).toEqual([]);
  });

  test("handles single sub-array", () => {
    expect(flatten([[1, 2, 3]])).toEqual([1, 2, 3]);
  });

  test("handles sub-arrays of different lengths", () => {
    expect(flatten([[1], [2, 3, 4], [5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
