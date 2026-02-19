const capitalizeWords = require("./problem");

describe("12 - Capitalize Words", () => {
  test("capitalizes simple sentence", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  test("lowercases the rest of each word", () => {
    expect(capitalizeWords("jAVASCRIPT is FUN")).toBe("Javascript Is Fun");
  });

  test("handles single character", () => {
    expect(capitalizeWords("a")).toBe("A");
  });

  test("handles empty string", () => {
    expect(capitalizeWords("")).toBe("");
  });

  test("handles single word", () => {
    expect(capitalizeWords("hello")).toBe("Hello");
  });

  test("handles already capitalized", () => {
    expect(capitalizeWords("Hello World")).toBe("Hello World");
  });
});
