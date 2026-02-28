const merge = require("./problem");

describe("72 - Object Merge", () => {
  test("merges two non-overlapping objects", () => {
    expect(merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });

  test("later object overwrites", () => {
    expect(merge({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
  });

  test("merges three objects", () => {
    expect(merge({ a: 1 }, { b: 2 }, { c: 3 })).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  test("overlap with multiple keys", () => {
    expect(merge({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual({
      a: 1,
      b: 3,
      c: 4,
    });
  });

  test("single empty object", () => {
    expect(merge({})).toEqual({});
  });

  test("last wins across three", () => {
    expect(merge({ a: 1 }, { a: 2 }, { a: 3 })).toEqual({ a: 3 });
  });
});
