const longestPrefix = require("./problem");

describe("58 - Longest Common Prefix", () => {
  test("partial match", () => {
    expect(longestPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  test("no common prefix", () => {
    expect(longestPrefix(["dog", "racecar", "car"])).toBe("");
  });

  test("longer prefix", () => {
    expect(longestPrefix(["interstellar", "internet", "internal"])).toBe("inter");
  });

  test("single string", () => {
    expect(longestPrefix(["abc"])).toBe("abc");
  });

  test("empty array", () => {
    expect(longestPrefix([])).toBe("");
  });

  test("all identical", () => {
    expect(longestPrefix(["test", "test", "test"])).toBe("test");
  });

  test("empty string in array", () => {
    expect(longestPrefix(["abc", "", "abd"])).toBe("");
  });
});
