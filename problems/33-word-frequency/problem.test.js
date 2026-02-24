const wordFrequency = require("./problem");

describe("33 - Word Frequency", () => {
  test("counts word occurrences", () => {
    expect(wordFrequency("the cat and the dog")).toEqual({
      the: 2, cat: 1, and: 1, dog: 1
    });
  });

  test("handles repeated word", () => {
    expect(wordFrequency("hello hello hello")).toEqual({ hello: 3 });
  });

  test("handles single word", () => {
    expect(wordFrequency("one")).toEqual({ one: 1 });
  });

  test("handles empty string", () => {
    expect(wordFrequency("")).toEqual({});
  });

  test("handles mixed case", () => {
    expect(wordFrequency("Hello hello HELLO")).toEqual({ hello: 3 });
  });

  test("handles unique words", () => {
    expect(wordFrequency("a b c d")).toEqual({ a: 1, b: 1, c: 1, d: 1 });
  });
});
