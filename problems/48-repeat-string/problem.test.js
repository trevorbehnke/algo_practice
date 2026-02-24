const repeatString = require("./problem");

describe("48 - Repeat String", () => {
  test("repeats 3 times", () => {
    expect(repeatString("ha", 3)).toBe("hahaha");
  });

  test("repeats 2 times", () => {
    expect(repeatString("ab", 2)).toBe("abab");
  });

  test("repeats single char 5 times", () => {
    expect(repeatString("x", 5)).toBe("xxxxx");
  });

  test("zero repetitions", () => {
    expect(repeatString("hi", 0)).toBe("");
  });

  test("empty string repeated", () => {
    expect(repeatString("", 10)).toBe("");
  });

  test("repeat once", () => {
    expect(repeatString("hello", 1)).toBe("hello");
  });
});
