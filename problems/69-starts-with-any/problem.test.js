const startsWithAny = require("./problem");

describe("69 - Starts With Any", () => {
  test("matches first prefix", () => {
    expect(startsWithAny("hello world", ["he", "hi", "ho"])).toBe(true);
  });

  test("no match", () => {
    expect(startsWithAny("goodbye", ["he", "hi", "ho"])).toBe(false);
  });

  test("matches later prefix", () => {
    expect(startsWithAny("interesting", ["intro", "inter"])).toBe(true);
  });

  test("empty prefixes", () => {
    expect(startsWithAny("test", [])).toBe(false);
  });

  test("empty string", () => {
    expect(startsWithAny("", ["a"])).toBe(false);
  });

  test("exact match counts", () => {
    expect(startsWithAny("abc", ["abc", "def"])).toBe(true);
  });
});
