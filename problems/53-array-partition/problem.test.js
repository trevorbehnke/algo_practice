const partition = require("./problem");

describe("53 - Array Partition", () => {
  test("partitions even and odd", () => {
    expect(partition([1, 2, 3, 4, 5], (n) => n % 2 === 0)).toEqual([
      [2, 4],
      [1, 3, 5],
    ]);
  });

  test("partitions by string prefix", () => {
    expect(
      partition(["cat", "car", "dog"], (w) => w.startsWith("c"))
    ).toEqual([["cat", "car"], ["dog"]]);
  });

  test("none match", () => {
    expect(partition([1, 2, 3], (n) => n > 10)).toEqual([[], [1, 2, 3]]);
  });

  test("all match", () => {
    expect(partition([2, 4, 6], (n) => n % 2 === 0)).toEqual([
      [2, 4, 6],
      [],
    ]);
  });

  test("empty array", () => {
    expect(partition([], (n) => n > 0)).toEqual([[], []]);
  });

  test("partitions by length", () => {
    expect(
      partition(["a", "bb", "ccc", "dd"], (s) => s.length > 1)
    ).toEqual([["bb", "ccc", "dd"], ["a"]]);
  });
});
