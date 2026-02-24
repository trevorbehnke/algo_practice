const flattenDeep = require("./problem");

describe("35 - Flatten Deep", () => {
  test("flattens one level", () => {
    expect(flattenDeep([1, [2, 3]])).toEqual([1, 2, 3]);
  });

  test("flattens multiple levels", () => {
    expect(flattenDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  test("flattens deeply nested single value", () => {
    expect(flattenDeep([[[[1]]]])).toEqual([1]);
  });

  test("handles already flat array", () => {
    expect(flattenDeep([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("handles empty array", () => {
    expect(flattenDeep([])).toEqual([]);
  });

  test("handles mix of nested and flat", () => {
    expect(flattenDeep([1, [2], 3, [4, [5]]])).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles empty nested arrays", () => {
    expect(flattenDeep([1, [], [2, []], 3])).toEqual([1, 2, 3]);
  });
});
