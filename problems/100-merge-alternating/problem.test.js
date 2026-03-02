const mergeAlternating = require("./problem");

describe("100 - Merge Alternating", () => {
  test("equal length arrays", () => {
    expect(mergeAlternating([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("second array longer", () => {
    expect(mergeAlternating(["a", "c"], ["b", "d", "e", "f"]))
      .toEqual(["a", "b", "c", "d", "e", "f"]);
  });

  test("first array longer", () => {
    expect(mergeAlternating([1, 2, 3, 4], [10, 20]))
      .toEqual([1, 10, 2, 20, 3, 4]);
  });

  test("second array empty", () => {
    expect(mergeAlternating([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test("first array empty", () => {
    expect(mergeAlternating([], [4, 5])).toEqual([4, 5]);
  });

  test("both empty", () => {
    expect(mergeAlternating([], [])).toEqual([]);
  });

  test("single element each", () => {
    expect(mergeAlternating([1], [2])).toEqual([1, 2]);
  });
});
