const isPalindrome = require("./problem");

describe("03 - Is Palindrome", () => {
  test("detects a simple palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("detects a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("handles mixed case", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test("ignores spaces and punctuation", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  test("handles empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("handles single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("handles palindrome with punctuation", () => {
    expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
  });

  test("handles non-palindrome with similar chars", () => {
    expect(isPalindrome("abc")).toBe(false);
  });
});
