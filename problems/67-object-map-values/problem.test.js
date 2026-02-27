const mapValues = require("./problem");

describe("67 - Object Map Values", () => {
  test("doubles values", () => {
    expect(mapValues({ a: 1, b: 2, c: 3 }, (v) => v * 2)).toEqual({
      a: 2,
      b: 4,
      c: 6,
    });
  });

  test("transforms to string length", () => {
    expect(mapValues({ x: "hi", y: "hello" }, (v) => v.length)).toEqual({
      x: 2,
      y: 5,
    });
  });

  test("empty object", () => {
    expect(mapValues({}, (v) => v)).toEqual({});
  });

  test("converts to boolean", () => {
    expect(mapValues({ a: 0, b: 1, c: 2 }, (v) => v > 0)).toEqual({
      a: false,
      b: true,
      c: true,
    });
  });

  test("string transformation", () => {
    expect(
      mapValues({ name: "alice", city: "boston" }, (v) => v.toUpperCase())
    ).toEqual({ name: "ALICE", city: "BOSTON" });
  });
});
