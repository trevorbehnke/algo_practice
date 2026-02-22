const titleCase = require("./problem");

describe("19 - Title Case with Exceptions", () => {
  test("capitalizes with exceptions", () => {
    expect(titleCase("the lord of the rings")).toBe("The Lord of the Rings");
  });

  test("always capitalizes first word", () => {
    expect(titleCase("a tale of two cities")).toBe("A Tale of Two Cities");
  });

  test("handles 'and'", () => {
    expect(titleCase("war and peace")).toBe("War and Peace");
  });

  test("handles single exception word", () => {
    expect(titleCase("the")).toBe("The");
  });

  test("handles no exception words", () => {
    expect(titleCase("hello world")).toBe("Hello World");
  });

  test("handles multiple exceptions in a row", () => {
    expect(titleCase("out of the blue")).toBe("Out of the Blue");
  });

  test("handles empty string", () => {
    expect(titleCase("")).toBe("");
  });
});
