const frequencySort = require("./problem");

describe("50 - Character Frequency Sort", () => {
  test("sorts by frequency", () => {
    const result = frequencySort("tree");
    // 'e' appears 2x, 't' and 'r' appear 1x each
    expect(result.slice(0, 2)).toBe("ee");
    expect(result.length).toBe(4);
  });

  test("tied frequencies", () => {
    const result = frequencySort("cccaaa");
    // both appear 3x — either order is fine
    expect(result.length).toBe(6);
    const isValid =
      result === "cccaaa" || result === "aaaccc";
    expect(isValid).toBe(true);
  });

  test("case sensitive", () => {
    const result = frequencySort("Aabb");
    // b:2, A:1, a:1
    expect(result.slice(0, 2)).toBe("bb");
    expect(result.length).toBe(4);
  });

  test("single character", () => {
    expect(frequencySort("a")).toBe("a");
  });

  test("empty string", () => {
    expect(frequencySort("")).toBe("");
  });

  test("all same character", () => {
    expect(frequencySort("aaaa")).toBe("aaaa");
  });

  test("descending frequency order", () => {
    const result = frequencySort("aaabbc");
    // a:3, b:2, c:1
    expect(result.slice(0, 3)).toBe("aaa");
    expect(result.slice(3, 5)).toBe("bb");
    expect(result.slice(5)).toBe("c");
  });
});
