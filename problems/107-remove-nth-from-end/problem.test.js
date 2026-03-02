const removeNthFromEnd = require("./problem");

describe("107 - Remove Nth From End", () => {
  test("remove 2nd from end", () => {
    expect(removeNthFromEnd([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 3, 5]);
  });

  test("remove last", () => {
    expect(removeNthFromEnd([1, 2, 3], 1)).toEqual([1, 2]);
  });

  test("remove first", () => {
    expect(removeNthFromEnd([1, 2, 3], 3)).toEqual([2, 3]);
  });

  test("strings", () => {
    expect(removeNthFromEnd(["a", "b", "c"], 2)).toEqual(["a", "c"]);
  });

  test("single element", () => {
    expect(removeNthFromEnd([1], 1)).toEqual([]);
  });

  test("remove from two-element array", () => {
    expect(removeNthFromEnd([10, 20], 1)).toEqual([10]);
  });
});
