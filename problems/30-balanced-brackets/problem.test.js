const isBalanced = require("./problem");

describe("30 - Balanced Brackets", () => {
  test("simple parentheses", () => {
    expect(isBalanced("()")).toBe(true);
  });

  test("multiple bracket types", () => {
    expect(isBalanced("()[]{}")).toBe(true);
  });

  test("mismatched brackets", () => {
    expect(isBalanced("(]")).toBe(false);
  });

  test("wrong nesting order", () => {
    expect(isBalanced("([)]")).toBe(false);
  });

  test("properly nested", () => {
    expect(isBalanced("{[]}")).toBe(true);
  });

  test("empty string", () => {
    expect(isBalanced("")).toBe(true);
  });

  test("deeply nested", () => {
    expect(isBalanced("({[()]})")).toBe(true);
  });

  test("only opening brackets", () => {
    expect(isBalanced("(((")).toBe(false);
  });

  test("only closing brackets", () => {
    expect(isBalanced(")))")).toBe(false);
  });

  test("single bracket", () => {
    expect(isBalanced("(")).toBe(false);
  });
});
