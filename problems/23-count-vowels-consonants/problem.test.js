const countVC = require("./problem");

describe("23 - Count Vowels and Consonants", () => {
  test("counts in a simple word", () => {
    expect(countVC("hello")).toEqual({ vowels: 2, consonants: 3 });
  });

  test("all vowels", () => {
    expect(countVC("aeiou")).toEqual({ vowels: 5, consonants: 0 });
  });

  test("all consonants", () => {
    expect(countVC("xyz")).toEqual({ vowels: 0, consonants: 3 });
  });

  test("ignores spaces", () => {
    expect(countVC("Hello World")).toEqual({ vowels: 3, consonants: 7 });
  });

  test("handles empty string", () => {
    expect(countVC("")).toEqual({ vowels: 0, consonants: 0 });
  });

  test("ignores numbers and punctuation", () => {
    expect(countVC("h3llo!")).toEqual({ vowels: 1, consonants: 3 });
  });

  test("handles mixed case", () => {
    expect(countVC("AeIoU")).toEqual({ vowels: 5, consonants: 0 });
  });
});
