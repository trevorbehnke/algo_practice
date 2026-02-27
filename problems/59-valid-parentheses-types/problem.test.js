const isValid = require("./problem");

describe("59 - Valid Parentheses (Multiple Types)", () => {
  test("simple pair", () => {
    expect(isValid("()")).toBe(true);
  });

  test("multiple types in sequence", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test("mismatched types", () => {
    expect(isValid("(]")).toBe(false);
  });

  test("wrong nesting order", () => {
    expect(isValid("([)]")).toBe(false);
  });

  test("properly nested", () => {
    expect(isValid("{[]}")).toBe(true);
  });

  test("empty string", () => {
    expect(isValid("")).toBe(true);
  });

  test("deeply nested", () => {
    expect(isValid("({[()]})")).toBe(true);
  });

  test("only opening", () => {
    expect(isValid("(((")).toBe(false);
  });

  test("only closing", () => {
    expect(isValid(")))")).toBe(false);
  });
});
