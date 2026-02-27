const pick = require("./problem");

describe("63 - Object Pick", () => {
  test("picks specified keys", () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });

  test("picks single key", () => {
    expect(pick({ name: "Alice", age: 25 }, ["name"])).toEqual({
      name: "Alice",
    });
  });

  test("keys not in object", () => {
    expect(pick({ a: 1, b: 2 }, ["c", "d"])).toEqual({});
  });

  test("empty keys array", () => {
    expect(pick({ a: 1, b: 2, c: 3 }, [])).toEqual({});
  });

  test("empty object", () => {
    expect(pick({}, ["a"])).toEqual({});
  });

  test("picks all keys", () => {
    expect(pick({ x: 10, y: 20 }, ["x", "y"])).toEqual({ x: 10, y: 20 });
  });
});
