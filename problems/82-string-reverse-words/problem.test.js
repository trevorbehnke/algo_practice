const reverseWords = require("./problem");

describe("82 - Reverse Words", () => {
  test("two words", () => {
    expect(reverseWords("hello world")).toBe("world hello");
  });

  test("four words", () => {
    expect(reverseWords("the quick brown fox")).toBe("fox brown quick the");
  });

  test("single word", () => {
    expect(reverseWords("hi")).toBe("hi");
  });

  test("empty string", () => {
    expect(reverseWords("")).toBe("");
  });

  test("three words", () => {
    expect(reverseWords("a b c")).toBe("c b a");
  });
});
