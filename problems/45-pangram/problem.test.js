const isPangram = require("./problem");

describe("45 - Pangram", () => {
  test("classic pangram", () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog")).toBe(true);
  });

  test("not a pangram", () => {
    expect(isPangram("Hello world")).toBe(false);
  });

  test("exact alphabet", () => {
    expect(isPangram("abcdefghijklmnopqrstuvwxyz")).toBe(true);
  });

  test("empty string", () => {
    expect(isPangram("")).toBe(false);
  });

  test("missing one letter", () => {
    expect(isPangram("The quick brown fox jumps over the lay dog")).toBe(false);
  });

  test("mixed case counts", () => {
    expect(isPangram("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG")).toBe(true);
  });

  test("ignores numbers and punctuation", () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog! 123")).toBe(true);
  });
});
