const countWordsByLength = require("./problem");

describe("104 - Count Words By Length", () => {
  test("mixed lengths", () => {
    expect(countWordsByLength("I am a dog")).toEqual({ 1: 2, 2: 1, 3: 1 });
  });

  test("same length words", () => {
    expect(countWordsByLength("hello world")).toEqual({ 5: 2 });
  });

  test("two different lengths", () => {
    expect(countWordsByLength("the quick brown fox")).toEqual({ 3: 2, 5: 2 });
  });

  test("empty string", () => {
    expect(countWordsByLength("")).toEqual({});
  });

  test("single word", () => {
    expect(countWordsByLength("hello")).toEqual({ 5: 1 });
  });

  test("all different lengths", () => {
    expect(countWordsByLength("a to the jump")).toEqual({ 1: 1, 2: 1, 3: 1, 4: 1 });
  });
});
