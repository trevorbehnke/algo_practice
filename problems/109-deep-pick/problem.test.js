const deepPick = require("./problem");

describe("109 - Deep Pick", () => {
  test("pick top-level keys", () => {
    expect(deepPick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });

  test("pick nested and top-level", () => {
    expect(deepPick({ user: { name: "Jo", age: 25 }, role: "admin" }, ["user.name", "role"]))
      .toEqual({ "user.name": "Jo", role: "admin" });
  });

  test("path does not exist", () => {
    expect(deepPick({ x: 1 }, ["y"])).toEqual({});
  });

  test("empty object", () => {
    expect(deepPick({}, ["a"])).toEqual({});
  });

  test("empty paths array", () => {
    expect(deepPick({ a: 1 }, [])).toEqual({});
  });

  test("deeply nested path", () => {
    expect(deepPick({ a: { b: { c: 42 } } }, ["a.b.c"])).toEqual({ "a.b.c": 42 });
  });

  test("mix of valid and invalid paths", () => {
    expect(deepPick({ a: 1, b: 2 }, ["a", "z", "b"])).toEqual({ a: 1, b: 2 });
  });
});
