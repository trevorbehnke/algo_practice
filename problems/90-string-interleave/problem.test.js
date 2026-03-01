const interleave = require("./problem");

describe("90 - String Interleave", () => {
  test("equal length", () => {
    expect(interleave("abc", "123")).toBe("a1b2c3");
  });

  test("second string longer", () => {
    expect(interleave("ab", "1234")).toBe("a1b234");
  });

  test("first string longer", () => {
    expect(interleave("abcd", "12")).toBe("a1b2cd");
  });

  test("first empty", () => {
    expect(interleave("", "abc")).toBe("abc");
  });

  test("second empty", () => {
    expect(interleave("abc", "")).toBe("abc");
  });

  test("both empty", () => {
    expect(interleave("", "")).toBe("");
  });

  test("single characters", () => {
    expect(interleave("a", "1")).toBe("a1");
  });
});
