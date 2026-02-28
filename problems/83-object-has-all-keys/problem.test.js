const hasAllKeys = require("./problem");

describe("83 - Object Has All Keys", () => {
  test("has all specified keys", () => {
    expect(hasAllKeys({ a: 1, b: 2, c: 3 }, ["a", "b"])).toBe(true);
  });

  test("missing a key", () => {
    expect(hasAllKeys({ a: 1, b: 2 }, ["a", "b", "c"])).toBe(false);
  });

  test("empty keys array", () => {
    expect(hasAllKeys({ x: 1 }, [])).toBe(true);
  });

  test("empty object", () => {
    expect(hasAllKeys({}, ["a"])).toBe(false);
  });

  test("all keys present exactly", () => {
    expect(hasAllKeys({ name: "Alice", age: 25 }, ["name", "age"])).toBe(true);
  });

  test("single missing key", () => {
    expect(hasAllKeys({ a: 1, b: 2, c: 3 }, ["d"])).toBe(false);
  });
});
