const sortByKey = require("./problem");

describe("99 - Sort By Key", () => {
  test("sort by age", () => {
    expect(sortByKey([{ name: "b", age: 30 }, { name: "a", age: 20 }], "age"))
      .toEqual([{ name: "a", age: 20 }, { name: "b", age: 30 }]);
  });

  test("sort by x", () => {
    expect(sortByKey([{ x: 3 }, { x: 1 }, { x: 2 }], "x"))
      .toEqual([{ x: 1 }, { x: 2 }, { x: 3 }]);
  });

  test("empty array", () => {
    expect(sortByKey([], "score")).toEqual([]);
  });

  test("already sorted", () => {
    expect(sortByKey([{ v: 1 }, { v: 2 }, { v: 3 }], "v"))
      .toEqual([{ v: 1 }, { v: 2 }, { v: 3 }]);
  });

  test("negative values", () => {
    expect(sortByKey([{ n: 0 }, { n: -5 }, { n: 3 }], "n"))
      .toEqual([{ n: -5 }, { n: 0 }, { n: 3 }]);
  });

  test("does not modify original array", () => {
    const original = [{ a: 2 }, { a: 1 }];
    const result = sortByKey(original, "a");
    expect(result).toEqual([{ a: 1 }, { a: 2 }]);
    expect(original[0].a).toBe(2);
  });
});
