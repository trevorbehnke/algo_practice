const groupBy = require("./problem");

describe("20 - Group By", () => {
  test("groups people by age", () => {
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
    ];
    expect(groupBy(people, "age")).toEqual({
      25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
      30: [{ name: "Bob", age: 30 }],
    });
  });

  test("groups by string property", () => {
    const items = [
      { type: "fruit", name: "apple" },
      { type: "veggie", name: "carrot" },
      { type: "fruit", name: "banana" },
    ];
    expect(groupBy(items, "type")).toEqual({
      fruit: [{ type: "fruit", name: "apple" }, { type: "fruit", name: "banana" }],
      veggie: [{ type: "veggie", name: "carrot" }],
    });
  });

  test("handles single item", () => {
    expect(groupBy([{ a: 1 }], "a")).toEqual({
      1: [{ a: 1 }],
    });
  });

  test("handles empty array", () => {
    expect(groupBy([], "key")).toEqual({});
  });

  test("all items in same group", () => {
    const items = [
      { color: "red", id: 1 },
      { color: "red", id: 2 },
    ];
    expect(groupBy(items, "color")).toEqual({
      red: [{ color: "red", id: 1 }, { color: "red", id: 2 }],
    });
  });
});
