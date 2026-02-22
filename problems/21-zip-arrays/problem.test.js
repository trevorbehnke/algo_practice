const zip = require("./problem");

describe("21 - Zip Arrays", () => {
  test("zips two equal-length arrays", () => {
    expect(zip([1, 2, 3], ["a", "b", "c"])).toEqual([[1, "a"], [2, "b"], [3, "c"]]);
  });

  test("zips when first is shorter", () => {
    expect(zip([1, 2], ["a", "b", "c"])).toEqual([[1, "a"], [2, "b"]]);
  });

  test("zips when second is shorter", () => {
    expect(zip([1, 2, 3], ["a"])).toEqual([[1, "a"]]);
  });

  test("handles empty first array", () => {
    expect(zip([], [1, 2])).toEqual([]);
  });

  test("handles empty second array", () => {
    expect(zip([1, 2], [])).toEqual([]);
  });

  test("handles single element arrays", () => {
    expect(zip([1], [2])).toEqual([[1, 2]]);
  });
});
