const fromArray = require("./problem");

describe("68 - Array to Linked List", () => {
  test("three elements", () => {
    expect(fromArray([1, 2, 3])).toEqual({
      value: 1,
      next: { value: 2, next: { value: 3, next: null } },
    });
  });

  test("single element", () => {
    expect(fromArray(["a"])).toEqual({ value: "a", next: null });
  });

  test("empty array", () => {
    expect(fromArray([])).toEqual(null);
  });

  test("two elements", () => {
    expect(fromArray([10, 20])).toEqual({
      value: 10,
      next: { value: 20, next: null },
    });
  });

  test("four elements", () => {
    expect(fromArray([1, 2, 3, 4])).toEqual({
      value: 1,
      next: {
        value: 2,
        next: { value: 3, next: { value: 4, next: null } },
      },
    });
  });
});
