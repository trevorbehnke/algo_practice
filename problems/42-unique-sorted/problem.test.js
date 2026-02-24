const uniqueSorted = require("./problem");

describe("42 - Unique Sorted", () => {
  test("removes duplicates and sorts", () => {
    expect(uniqueSorted([3, 1, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  test("all same element", () => {
    expect(uniqueSorted([5, 5, 5])).toEqual([5]);
  });

  test("mixed with duplicates", () => {
    expect(uniqueSorted([4, 2, 7, 2, 1])).toEqual([1, 2, 4, 7]);
  });

  test("empty array", () => {
    expect(uniqueSorted([])).toEqual([]);
  });

  test("already sorted, no duplicates", () => {
    expect(uniqueSorted([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("single element", () => {
    expect(uniqueSorted([42])).toEqual([42]);
  });

  test("handles negative numbers", () => {
    expect(uniqueSorted([3, -1, 2, -1, 3])).toEqual([-1, 2, 3]);
  });
});
