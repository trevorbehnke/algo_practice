const objectFilter = require("./problem");

describe("47 - Object Filter", () => {
  test("filters by value comparison", () => {
    expect(objectFilter({ a: 1, b: 2, c: 3 }, (v) => v > 1)).toEqual({
      b: 2,
      c: 3,
    });
  });

  test("filters by string length", () => {
    expect(
      objectFilter({ x: "hi", y: "hello", z: "h" }, (v) => v.length > 1)
    ).toEqual({ x: "hi", y: "hello" });
  });

  test("no matches returns empty object", () => {
    expect(objectFilter({ a: 1, b: 2 }, (v) => v > 10)).toEqual({});
  });

  test("all match", () => {
    expect(objectFilter({ a: 1, b: 2 }, (v) => v > 0)).toEqual({
      a: 1,
      b: 2,
    });
  });

  test("empty object", () => {
    expect(objectFilter({}, (v) => v > 0)).toEqual({});
  });

  test("filters even values", () => {
    expect(
      objectFilter({ a: 1, b: 2, c: 3, d: 4 }, (v) => v % 2 === 0)
    ).toEqual({ b: 2, d: 4 });
  });
});
