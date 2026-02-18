const truncate = require("./problem");

describe("08 - Truncate String", () => {
  test("truncates a long string", () => {
    expect(truncate("Hello World", 5)).toBe("He...");
  });

  test("returns string as-is when equal to max", () => {
    expect(truncate("Hello World", 11)).toBe("Hello World");
  });

  test("returns string as-is when shorter than max", () => {
    expect(truncate("Hello World", 20)).toBe("Hello World");
  });

  test("truncates to minimum useful length", () => {
    expect(truncate("abcdef", 4)).toBe("a...");
  });

  test("does not truncate when exactly at limit", () => {
    expect(truncate("abcdef", 6)).toBe("abcdef");
  });

  test("handles max of 3", () => {
    expect(truncate("hello", 3)).toBe("...");
  });
});
