const zipObject = require("./problem");

describe("80 - Zip Object", () => {
  test("builds object from pairs", () => {
    expect(zipObject([["a", 1], ["b", 2], ["c", 3]])).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  test("mixed types", () => {
    expect(zipObject([["name", "Alice"], ["age", 25]])).toEqual({
      name: "Alice",
      age: 25,
    });
  });

  test("duplicate keys — last wins", () => {
    expect(zipObject([["a", 1], ["a", 2]])).toEqual({ a: 2 });
  });

  test("empty array", () => {
    expect(zipObject([])).toEqual({});
  });

  test("single pair", () => {
    expect(zipObject([["x", 10]])).toEqual({ x: 10 });
  });
});
