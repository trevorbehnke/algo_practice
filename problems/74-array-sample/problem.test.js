const sample = require("./problem");

describe("74 - Array Sample", () => {
  test("returns correct number of elements", () => {
    const result = sample([1, 2, 3, 4, 5], 2);
    expect(result.length).toBe(2);
  });

  test("all elements come from the original array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr, 3);
    result.forEach((el) => {
      expect(arr).toContain(el);
    });
  });

  test("no duplicates in result", () => {
    const result = sample([1, 2, 3, 4, 5], 4);
    const unique = new Set(result);
    expect(unique.size).toBe(result.length);
  });

  test("n larger than array returns all elements", () => {
    const result = sample([1, 2, 3], 5);
    expect(result.length).toBe(3);
    expect(result.sort()).toEqual([1, 2, 3]);
  });

  test("n of 0 returns empty", () => {
    expect(sample([1, 2, 3], 0)).toEqual([]);
  });

  test("empty array returns empty", () => {
    expect(sample([], 3)).toEqual([]);
  });

  test("does not modify the original array", () => {
    const arr = [1, 2, 3, 4, 5];
    const copy = [...arr];
    sample(arr, 3);
    expect(arr).toEqual(copy);
  });
});
