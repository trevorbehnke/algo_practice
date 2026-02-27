const indexMap = require("./problem");

describe("61 - Index Map", () => {
  test("numbers with duplicates", () => {
    expect(indexMap([1, 2, 3, 2, 1])).toEqual({
      1: [0, 4],
      2: [1, 3],
      3: [2],
    });
  });

  test("strings", () => {
    expect(indexMap(["a", "b", "a"])).toEqual({
      a: [0, 2],
      b: [1],
    });
  });

  test("all same", () => {
    expect(indexMap([5, 5, 5])).toEqual({ 5: [0, 1, 2] });
  });

  test("empty array", () => {
    expect(indexMap([])).toEqual({});
  });

  test("no duplicates", () => {
    expect(indexMap([10, 20, 30])).toEqual({
      10: [0],
      20: [1],
      30: [2],
    });
  });
});
