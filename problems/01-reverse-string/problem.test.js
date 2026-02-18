const reverseString = require("./problem");

describe("01 - Reverse String", () => {
  test("reverses a normal string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverses a short string", () => {
    expect(reverseString("abc")).toBe("cba");
  });

  test("handles empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("handles single character", () => {
    expect(reverseString("a")).toBe("a");
  });

  test("handles string with spaces", () => {
    expect(reverseString("hi there")).toBe("ereht ih");
  });

  test("handles string with numbers", () => {
    expect(reverseString("12345")).toBe("54321");
  });
});
