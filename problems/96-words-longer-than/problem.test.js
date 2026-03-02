const wordsLongerThan = require("./problem");

describe("96 - Words Longer Than", () => {
  test("filters words longer than 3", () => {
    expect(wordsLongerThan("the quick brown fox jumps", 3)).toEqual(["quick", "brown", "jumps"]);
  });

  test("no words match", () => {
    expect(wordsLongerThan("I am ok", 2)).toEqual([]);
  });

  test("all words match", () => {
    expect(wordsLongerThan("hello world", 4)).toEqual(["hello", "world"]);
  });

  test("empty string", () => {
    expect(wordsLongerThan("", 1)).toEqual([]);
  });

  test("words of exactly n length excluded", () => {
    expect(wordsLongerThan("cat dog bird", 3)).toEqual(["bird"]);
  });

  test("threshold of zero", () => {
    expect(wordsLongerThan("a bb ccc", 0)).toEqual(["a", "bb", "ccc"]);
  });
});
