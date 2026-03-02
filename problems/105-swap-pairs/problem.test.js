const swapPairs = require("./problem");

describe("105 - Swap Pairs", () => {
  test("even length", () => {
    expect(swapPairs([1, 2, 3, 4])).toEqual([2, 1, 4, 3]);
  });

  test("odd length", () => {
    expect(swapPairs([1, 2, 3])).toEqual([2, 1, 3]);
  });

  test("single element", () => {
    expect(swapPairs([1])).toEqual([1]);
  });

  test("empty array", () => {
    expect(swapPairs([])).toEqual([]);
  });

  test("strings", () => {
    expect(swapPairs(["a", "b", "c", "d", "e"])).toEqual(["b", "a", "d", "c", "e"]);
  });

  test("two elements", () => {
    expect(swapPairs([10, 20])).toEqual([20, 10]);
  });
});
