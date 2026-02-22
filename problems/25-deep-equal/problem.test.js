const deepEqual = require("./problem");

describe("25 - Deep Equal", () => {
  test("compares equal numbers", () => {
    expect(deepEqual(1, 1)).toBe(true);
  });

  test("compares different numbers", () => {
    expect(deepEqual(1, 2)).toBe(false);
  });

  test("compares strings", () => {
    expect(deepEqual("hi", "hi")).toBe(true);
  });

  test("different types are not equal", () => {
    expect(deepEqual(1, "1")).toBe(false);
  });

  test("compares null values", () => {
    expect(deepEqual(null, null)).toBe(true);
  });

  test("null vs object is not equal", () => {
    expect(deepEqual(null, {})).toBe(false);
  });

  test("compares simple arrays", () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test("compares different arrays", () => {
    expect(deepEqual([1, 2], [1, 3])).toBe(false);
  });

  test("arrays of different lengths", () => {
    expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
  });

  test("compares simple objects", () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
  });

  test("compares different objects", () => {
    expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
  });

  test("objects with different keys", () => {
    expect(deepEqual({ a: 1 }, { b: 1 })).toBe(false);
  });

  test("compares nested structures", () => {
    expect(deepEqual({ a: [1, 2] }, { a: [1, 2] })).toBe(true);
  });

  test("compares deeply nested objects", () => {
    expect(deepEqual(
      { a: { b: { c: 1 } } },
      { a: { b: { c: 1 } } }
    )).toBe(true);
  });

  test("detects deep difference", () => {
    expect(deepEqual(
      { a: { b: { c: 1 } } },
      { a: { b: { c: 2 } } }
    )).toBe(false);
  });
});
