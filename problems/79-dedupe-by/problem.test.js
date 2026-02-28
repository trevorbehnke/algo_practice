const dedupeBy = require("./problem");

describe("79 - Dedupe By", () => {
  test("dedupes by Math.floor", () => {
    expect(dedupeBy([1.1, 1.9, 2.3, 2.8, 3.1], Math.floor)).toEqual([1.1, 2.3, 3.1]);
  });

  test("dedupes by first letter", () => {
    expect(dedupeBy(["hi", "hello", "hey", "bye"], (w) => w[0])).toEqual([
      "hi",
      "bye",
    ]);
  });

  test("no duplicates", () => {
    expect(dedupeBy([1, 2, 3], (x) => x)).toEqual([1, 2, 3]);
  });

  test("empty array", () => {
    expect(dedupeBy([], (x) => x)).toEqual([]);
  });

  test("all same callback result", () => {
    expect(dedupeBy([1, 2, 3], () => "same")).toEqual([1]);
  });

  test("dedupes by string length", () => {
    expect(dedupeBy(["a", "bb", "c", "dd", "eee"], (s) => s.length)).toEqual([
      "a",
      "bb",
      "eee",
    ]);
  });
});
