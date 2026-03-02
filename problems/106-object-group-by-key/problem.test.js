const groupByKey = require("./problem");

describe("106 - Object Group By Key", () => {
  test("groups by type", () => {
    expect(groupByKey([{ type: "a", n: 1 }, { type: "b", n: 2 }, { type: "a", n: 3 }], "type"))
      .toEqual({ a: [{ type: "a", n: 1 }, { type: "a", n: 3 }], b: [{ type: "b", n: 2 }] });
  });

  test("all same value", () => {
    expect(groupByKey([{ color: "red" }, { color: "red" }], "color"))
      .toEqual({ red: [{ color: "red" }, { color: "red" }] });
  });

  test("empty array", () => {
    expect(groupByKey([], "x")).toEqual({});
  });

  test("single item", () => {
    expect(groupByKey([{ a: 1 }], "a")).toEqual({ 1: [{ a: 1 }] });
  });

  test("groups by numeric values", () => {
    expect(groupByKey([{ score: 10, name: "a" }, { score: 20, name: "b" }, { score: 10, name: "c" }], "score"))
      .toEqual({ 10: [{ score: 10, name: "a" }, { score: 10, name: "c" }], 20: [{ score: 20, name: "b" }] });
  });
});
