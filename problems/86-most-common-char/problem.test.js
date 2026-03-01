const mostCommonChar = require("./problem");

describe("86 - Most Common Character", () => {
  test("basic case", () => {
    expect(mostCommonChar("hello")).toBe("l");
  });

  test("clear winner", () => {
    expect(mostCommonChar("aabbbcc")).toBe("b");
  });

  test("tie returns first", () => {
    expect(mostCommonChar("abc")).toBe("a");
  });

  test("ignores spaces and case", () => {
    expect(mostCommonChar("Hello World")).toBe("l");
  });

  test("empty string", () => {
    expect(mostCommonChar("")).toBe("");
  });

  test("single character", () => {
    expect(mostCommonChar("x")).toBe("x");
  });
});
