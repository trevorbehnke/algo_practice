const chunkArray = require("./problem");

describe("13 - Chunk Array", () => {
  test("chunks evenly", () => {
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  test("handles uneven last chunk", () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test("chunk size of 1", () => {
    expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  test("chunk size larger than array", () => {
    expect(chunkArray([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  test("chunk size equal to array length", () => {
    expect(chunkArray([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });

  test("works with strings", () => {
    expect(chunkArray(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
  });

  test("handles empty array", () => {
    expect(chunkArray([], 2)).toEqual([]);
  });
});
