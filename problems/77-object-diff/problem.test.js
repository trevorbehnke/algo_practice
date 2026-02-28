const objectDiff = require("./problem");

describe("77 - Object Diff", () => {
  test("one key differs", () => {
    expect(objectDiff({ a: 1, b: 2, c: 3 }, { a: 1, b: 5, c: 3 })).toEqual(["b"]);
  });

  test("no differences", () => {
    expect(objectDiff({ x: 1, y: 2 }, { x: 1, y: 2 })).toEqual([]);
  });

  test("single key differs", () => {
    expect(objectDiff({ a: 1 }, { a: 2 })).toEqual(["a"]);
  });

  test("no shared keys", () => {
    expect(objectDiff({ a: 1, b: 2 }, { c: 3 })).toEqual([]);
  });

  test("both empty", () => {
    expect(objectDiff({}, {})).toEqual([]);
  });

  test("multiple differences", () => {
    expect(objectDiff({ a: 1, b: 2, c: 3 }, { a: 9, b: 2, c: 7 })).toEqual(["a", "c"]);
  });
});
