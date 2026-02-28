const pluck = require("./problem");

describe("81 - Pluck", () => {
  test("plucks name", () => {
    expect(pluck([{ name: "Alice" }, { name: "Bob" }], "name")).toEqual([
      "Alice",
      "Bob",
    ]);
  });

  test("plucks a different key", () => {
    expect(pluck([{ a: 1, b: 2 }, { a: 3, b: 4 }], "b")).toEqual([2, 4]);
  });

  test("missing key returns undefined", () => {
    expect(pluck([{ x: 1 }, { y: 2 }], "x")).toEqual([1, undefined]);
  });

  test("empty array", () => {
    expect(pluck([], "name")).toEqual([]);
  });

  test("single object", () => {
    expect(pluck([{ score: 100 }], "score")).toEqual([100]);
  });
});
