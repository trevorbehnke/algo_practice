const without = require("./problem");

describe("49 - Array Without", () => {
  test("removes single value", () => {
    expect(without([1, 2, 3, 2, 1], 2)).toEqual([1, 3, 1]);
  });

  test("removes multiple values", () => {
    expect(without([1, 2, 3, 4, 5], 1, 3, 5)).toEqual([2, 4]);
  });

  test("works with strings", () => {
    expect(without(["a", "b", "c"], "b")).toEqual(["a", "c"]);
  });

  test("value not in array", () => {
    expect(without([1, 2, 3], 4)).toEqual([1, 2, 3]);
  });

  test("empty array", () => {
    expect(without([], 1)).toEqual([]);
  });

  test("removes all elements", () => {
    expect(without([1, 1, 1], 1)).toEqual([]);
  });

  test("removes multiple with repeats", () => {
    expect(without([1, 2, 1, 3, 2, 4], 1, 2)).toEqual([3, 4]);
  });
});
