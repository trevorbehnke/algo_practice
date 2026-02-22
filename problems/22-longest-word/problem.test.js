const longestWord = require("./problem");

describe("22 - Longest Word", () => {
  test("finds longest word", () => {
    expect(longestWord("The quick brown fox")).toBe("quick");
  });

  test("ignores punctuation", () => {
    expect(longestWord("I love JavaScript!")).toBe("JavaScript");
  });

  test("handles single word", () => {
    expect(longestWord("hi")).toBe("hi");
  });

  test("ignores commas and punctuation", () => {
    expect(longestWord("one, two, three!")).toBe("three");
  });

  test("returns first in case of tie", () => {
    expect(longestWord("cat dog rat")).toBe("cat");
  });

  test("handles punctuation-heavy sentence", () => {
    expect(longestWord("wow... really? yes!")).toBe("really");
  });
});
