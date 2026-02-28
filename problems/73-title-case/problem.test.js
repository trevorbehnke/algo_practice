const titleCase = require("./problem");

describe("73 - Title Case", () => {
  test("basic two words", () => {
    expect(titleCase("hello world")).toBe("Hello World");
  });

  test("lowercases rest of word", () => {
    expect(titleCase("javaScript is fun")).toBe("Javascript Is Fun");
  });

  test("single character", () => {
    expect(titleCase("a")).toBe("A");
  });

  test("empty string", () => {
    expect(titleCase("")).toBe("");
  });

  test("already title case", () => {
    expect(titleCase("Hello World")).toBe("Hello World");
  });

  test("all uppercase", () => {
    expect(titleCase("HELLO WORLD")).toBe("Hello World");
  });
});
