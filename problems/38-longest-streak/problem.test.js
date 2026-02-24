const longestStreak = require("./problem");

describe("38 - Longest Streak", () => {
  test("finds longest streak", () => {
    expect(longestStreak("aaabbb")).toBe(3);
  });

  test("finds longest at the end", () => {
    expect(longestStreak("aabbbcccc")).toBe(4);
  });

  test("handles all unique characters", () => {
    expect(longestStreak("abcde")).toBe(1);
  });

  test("handles all same characters", () => {
    expect(longestStreak("aaa")).toBe(3);
  });

  test("handles empty string", () => {
    expect(longestStreak("")).toBe(0);
  });

  test("handles single character", () => {
    expect(longestStreak("a")).toBe(1);
  });

  test("finds longest in the middle", () => {
    expect(longestStreak("aabbbbcc")).toBe(4);
  });
});
