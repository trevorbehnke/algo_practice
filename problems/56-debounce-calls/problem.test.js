const countConsecutiveDups = require("./problem");

describe("56 - Count Consecutive Duplicates", () => {
  test("mixed duplicates", () => {
    expect(countConsecutiveDups([1, 1, 2, 3, 3, 3])).toBe(3);
  });

  test("no duplicates", () => {
    expect(countConsecutiveDups([1, 2, 3])).toBe(0);
  });

  test("all same", () => {
    expect(countConsecutiveDups([5, 5, 5, 5])).toBe(3);
  });

  test("works with strings", () => {
    expect(countConsecutiveDups(["a", "a", "b", "b"])).toBe(2);
  });

  test("single element", () => {
    expect(countConsecutiveDups([1])).toBe(0);
  });

  test("empty array", () => {
    expect(countConsecutiveDups([])).toBe(0);
  });

  test("duplicates not consecutive don't count", () => {
    expect(countConsecutiveDups([1, 2, 1, 2])).toBe(0);
  });
});
