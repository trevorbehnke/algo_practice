const toArray = require("./problem");

describe("64 - Linked List to Array", () => {
  test("three nodes", () => {
    const list = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
    expect(toArray(list)).toEqual([1, 2, 3]);
  });

  test("two string nodes", () => {
    const list = { value: "a", next: { value: "b", next: null } };
    expect(toArray(list)).toEqual(["a", "b"]);
  });

  test("single node", () => {
    expect(toArray({ value: 42, next: null })).toEqual([42]);
  });

  test("null head (empty list)", () => {
    expect(toArray(null)).toEqual([]);
  });

  test("four nodes", () => {
    const list = {
      value: 10,
      next: { value: 20, next: { value: 30, next: { value: 40, next: null } } },
    };
    expect(toArray(list)).toEqual([10, 20, 30, 40]);
  });
});
