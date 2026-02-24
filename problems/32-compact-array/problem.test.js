const compact = require("./problem");

describe("32 - Compact Array", () => {
  test("removes falsy values", () => {
    expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
  });

  test("removes null, undefined, NaN", () => {
    const result = compact([null, undefined, NaN, "hello"]);
    expect(result).toEqual(["hello"]);
  });

  test("keeps all truthy values", () => {
    expect(compact([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("handles empty array", () => {
    expect(compact([])).toEqual([]);
  });

  test("handles all falsy", () => {
    expect(compact([0, false, null, "", undefined])).toEqual([]);
  });

  test("keeps strings and negative numbers", () => {
    expect(compact([-1, "hi", 0, ""])).toEqual([-1, "hi"]);
  });
});
