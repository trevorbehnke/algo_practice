const flattenOnce = require("./problem");

describe("103 - Recursive Flatten Once", () => {
  test("basic nested arrays", () => {
    expect(flattenOnce([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
  });

  test("only flattens one level", () => {
    expect(flattenOnce([[1], [2, [3]]])).toEqual([1, 2, [3]]);
  });

  test("mix of nested and flat", () => {
    expect(flattenOnce([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  test("empty array", () => {
    expect(flattenOnce([])).toEqual([]);
  });

  test("single nested array", () => {
    expect(flattenOnce([[1, 2]])).toEqual([1, 2]);
  });

  test("no nested arrays", () => {
    expect(flattenOnce([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("deeply nested preserved", () => {
    expect(flattenOnce([[[1, 2]], [[3]]])).toEqual([[1, 2], [3]]);
  });
});
