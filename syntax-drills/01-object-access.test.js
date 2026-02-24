const {
  getName, getByKey, getLast, getNameAtIndex, getNestedValue,
  setByKey, isHelloAt, getKeys, getValues, pluck
} = require("./01-object-access");

describe("Syntax Drill: Object & Array Access", () => {
  test("1. getName", () => {
    expect(getName({ name: "Alice", age: 25 })).toBe("Alice");
  });

  test("2. getByKey", () => {
    expect(getByKey({ a: 1, b: 2 }, "b")).toBe(2);
    expect(getByKey({ x: "hello" }, "x")).toBe("hello");
  });

  test("3. getLast", () => {
    expect(getLast([10, 20, 30])).toBe(30);
    expect(getLast([5])).toBe(5);
  });

  test("4. getNameAtIndex", () => {
    expect(getNameAtIndex([{ name: "A" }, { name: "B" }], 1)).toBe("B");
    expect(getNameAtIndex([{ name: "X" }], 0)).toBe("X");
  });

  test("5. getNestedValue", () => {
    expect(getNestedValue({ a: { b: { c: 42 } } })).toBe(42);
  });

  test("6. setByKey", () => {
    expect(setByKey({}, "x", 10)).toEqual({ x: 10 });
    expect(setByKey({ a: 1 }, "b", 2)).toEqual({ a: 1, b: 2 });
  });

  test("7. isHelloAt", () => {
    expect(isHelloAt(["hi", "hello", "hey"], 1)).toBe(true);
    expect(isHelloAt(["hi", "hello", "hey"], 0)).toBe(false);
  });

  test("8. getKeys", () => {
    expect(getKeys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"]);
  });

  test("9. getValues", () => {
    expect(getValues({ a: 1, b: 2 })).toEqual([1, 2]);
  });

  test("10. pluck", () => {
    expect(pluck([{ name: "A", age: 1 }, { name: "B", age: 2 }], "name")).toEqual(["A", "B"]);
    expect(pluck([{ x: 10 }, { x: 20 }, { x: 30 }], "x")).toEqual([10, 20, 30]);
  });
});
