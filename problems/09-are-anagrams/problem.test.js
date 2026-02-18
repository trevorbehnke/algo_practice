const areAnagrams = require("./problem");

describe("09 - Are Anagrams", () => {
  test("detects simple anagrams", () => {
    expect(areAnagrams("listen", "silent")).toBe(true);
  });

  test("detects non-anagrams", () => {
    expect(areAnagrams("hello", "world")).toBe(false);
  });

  test("ignores case", () => {
    expect(areAnagrams("Tea", "Eat")).toBe(true);
  });

  test("ignores spaces", () => {
    expect(areAnagrams("Dormitory", "Dirty Room")).toBe(true);
  });

  test("handles different lengths", () => {
    expect(areAnagrams("abc", "abcd")).toBe(false);
  });

  test("handles same counts but different chars", () => {
    expect(areAnagrams("aab", "bba")).toBe(false);
  });

  test("handles empty strings", () => {
    expect(areAnagrams("", "")).toBe(true);
  });
});
