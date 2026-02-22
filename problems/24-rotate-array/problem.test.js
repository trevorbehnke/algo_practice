const rotate = require("./problem");

describe("24 - Rotate Array", () => {
  test("rotates by 1", () => {
    expect(rotate([1, 2, 3, 4, 5], 1)).toEqual([5, 1, 2, 3, 4]);
  });

  test("rotates by 2", () => {
    expect(rotate([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });

  test("full rotation returns same array", () => {
    expect(rotate([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles k larger than array length", () => {
    expect(rotate([1, 2, 3, 4, 5], 7)).toEqual([4, 5, 1, 2, 3]);
  });

  test("handles k of 0", () => {
    expect(rotate([1, 2], 0)).toEqual([1, 2]);
  });

  test("works with strings", () => {
    expect(rotate(["a", "b", "c"], 1)).toEqual(["c", "a", "b"]);
  });

  test("handles single element", () => {
    expect(rotate([1], 3)).toEqual([1]);
  });
});
