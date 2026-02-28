const recursiveReverse = require("./problem");

describe("85 - Recursive Reverse", () => {
  test("reverses a word", () => {
    expect(recursiveReverse("hello")).toBe("olleh");
  });

  test("two characters", () => {
    expect(recursiveReverse("ab")).toBe("ba");
  });

  test("single character", () => {
    expect(recursiveReverse("a")).toBe("a");
  });

  test("empty string", () => {
    expect(recursiveReverse("")).toBe("");
  });

  test("palindrome stays same", () => {
    expect(recursiveReverse("racecar")).toBe("racecar");
  });

  test("longer string", () => {
    expect(recursiveReverse("javascript")).toBe("tpircsavaj");
  });
});
