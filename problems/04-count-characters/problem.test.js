const countCharacters = require("./problem");

describe("04 - Count Characters", () => {
  test("counts characters in a simple string", () => {
    expect(countCharacters("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });

  test("handles mixed case", () => {
    expect(countCharacters("aAa")).toEqual({ a: 3 });
  });

  test("ignores spaces", () => {
    expect(countCharacters("hi hi")).toEqual({ h: 2, i: 2 });
  });

  test("handles empty string", () => {
    expect(countCharacters("")).toEqual({});
  });

  test("handles single character", () => {
    expect(countCharacters("z")).toEqual({ z: 1 });
  });

  test("handles all same characters", () => {
    expect(countCharacters("aaa")).toEqual({ a: 3 });
  });

  test("handles numbers in string", () => {
    expect(countCharacters("a1b1")).toEqual({ a: 1, "1": 2, b: 1 });
  });
});
