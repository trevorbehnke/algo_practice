const mapFromArrays = require("./problem");

describe("60 - Map From Arrays", () => {
  test("equal length arrays", () => {
    expect(mapFromArrays(["a", "b", "c"], [1, 2, 3])).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  test("extra values ignored", () => {
    expect(mapFromArrays(["x", "y"], [10, 20, 30])).toEqual({
      x: 10,
      y: 20,
    });
  });

  test("extra keys get null", () => {
    expect(mapFromArrays(["a", "b", "c"], [1])).toEqual({
      a: 1,
      b: null,
      c: null,
    });
  });

  test("both empty", () => {
    expect(mapFromArrays([], [])).toEqual({});
  });

  test("single pair", () => {
    expect(mapFromArrays(["name"], ["Alice"])).toEqual({ name: "Alice" });
  });

  test("no values at all", () => {
    expect(mapFromArrays(["a", "b"], [])).toEqual({ a: null, b: null });
  });
});
