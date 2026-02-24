const getNestedValue = require("./problem");

describe("55 - Nested Object Value", () => {
  test("deep nested value", () => {
    expect(getNestedValue({ a: { b: { c: 42 } } }, "a.b.c")).toBe(42);
  });

  test("returns intermediate object", () => {
    expect(getNestedValue({ a: { b: { c: 42 } } }, "a.b")).toEqual({ c: 42 });
  });

  test("missing key returns undefined", () => {
    expect(getNestedValue({ a: { b: 1 } }, "a.x")).toBeUndefined();
  });

  test("top-level key", () => {
    expect(getNestedValue({ name: "Alice" }, "name")).toBe("Alice");
  });

  test("empty object", () => {
    expect(getNestedValue({}, "a.b")).toBeUndefined();
  });

  test("path through non-object returns undefined", () => {
    expect(getNestedValue({ a: 5 }, "a.b")).toBeUndefined();
  });

  test("deeply nested", () => {
    const obj = { a: { b: { c: { d: { e: "deep" } } } } };
    expect(getNestedValue(obj, "a.b.c.d.e")).toBe("deep");
  });
});
