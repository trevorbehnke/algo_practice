const binarySearch = require("./problem");

describe("54 - Binary Search", () => {
  test("finds element in middle", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
  });

  test("element not found", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 6)).toBe(-1);
  });

  test("finds last element", () => {
    expect(binarySearch([2, 4, 6, 8, 10], 10)).toBe(4);
  });

  test("finds first element", () => {
    expect(binarySearch([2, 4, 6, 8, 10], 2)).toBe(0);
  });

  test("single element found", () => {
    expect(binarySearch([1], 1)).toBe(0);
  });

  test("single element not found", () => {
    expect(binarySearch([1], 5)).toBe(-1);
  });

  test("empty array", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  test("larger array", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toBe(6);
  });
});
