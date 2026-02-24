const invert = require("./problem");

describe("39 - Object Invert", () => {
  test("inverts simple object", () => {
    expect(invert({ a: 1, b: 2, c: 3 })).toEqual({ 1: "a", 2: "b", 3: "c" });
  });

  test("inverts string values", () => {
    expect(invert({ name: "Alice", age: "25" })).toEqual({ Alice: "name", "25": "age" });
  });

  test("handles empty object", () => {
    expect(invert({})).toEqual({});
  });

  test("handles single key", () => {
    expect(invert({ x: "y" })).toEqual({ y: "x" });
  });

  test("handles numeric values", () => {
    expect(invert({ first: 1, second: 2 })).toEqual({ 1: "first", 2: "second" });
  });
});
