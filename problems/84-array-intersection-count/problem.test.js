const intersectionCount = require("./problem");

describe("84 - Array Intersection Count", () => {
  test("two common elements", () => {
    expect(intersectionCount([1, 2, 3], [2, 3, 4])).toBe(2);
  });

  test("duplicates only counted once", () => {
    expect(intersectionCount([1, 1, 2, 2], [2, 2, 3, 3])).toBe(1);
  });

  test("no common elements", () => {
    expect(intersectionCount([1, 2, 3], [4, 5, 6])).toBe(0);
  });

  test("empty first array", () => {
    expect(intersectionCount([], [1, 2])).toBe(0);
  });

  test("identical arrays", () => {
    expect(intersectionCount([1, 2, 3], [1, 2, 3])).toBe(3);
  });

  test("single common element", () => {
    expect(intersectionCount([5, 10, 15], [10, 20, 30])).toBe(1);
  });
});
