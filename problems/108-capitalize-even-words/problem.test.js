const capitalizeEven = require("./problem");

describe("108 - Capitalize Even Words", () => {
  test("alternates upper and lower", () => {
    expect(capitalizeEven("hello world foo bar")).toBe("HELLO world FOO bar");
  });

  test("three words", () => {
    expect(capitalizeEven("one two three")).toBe("ONE two THREE");
  });

  test("single word", () => {
    expect(capitalizeEven("single")).toBe("SINGLE");
  });

  test("empty string", () => {
    expect(capitalizeEven("")).toBe("");
  });

  test("two words", () => {
    expect(capitalizeEven("yes no")).toBe("YES no");
  });

  test("already mixed case input", () => {
    expect(capitalizeEven("HeLLo WoRLd")).toBe("HELLO world");
  });
});
