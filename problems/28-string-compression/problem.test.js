const compress = require("./problem");

describe("28 - String Compression", () => {
  test("compresses repeated characters", () => {
    expect(compress("aaabbc")).toBe("a3b2c");
  });

  test("returns original when compression is not shorter", () => {
    expect(compress("aabbcc")).toBe("aabbcc");
  });

  test("compresses all same characters", () => {
    expect(compress("aaaa")).toBe("a4");
  });

  test("returns original when no repeats", () => {
    expect(compress("abc")).toBe("abc");
  });

  test("handles repeating groups", () => {
    expect(compress("aabbaabb")).toBe("aabbaabb");
  });

  test("handles empty string", () => {
    expect(compress("")).toBe("");
  });

  test("compresses when significantly shorter", () => {
    expect(compress("aaaaaaaaaa")).toBe("a10");
  });

  test("handles single character", () => {
    expect(compress("a")).toBe("a");
  });
});
