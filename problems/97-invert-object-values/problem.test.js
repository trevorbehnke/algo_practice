const invertValues = require("./problem");

describe("97 - Invert Object Values", () => {
  test("basic inversion", () => {
    expect(invertValues({ fruits: ["apple", "banana"], vegs: ["carrot"] }))
      .toEqual({ apple: "fruits", banana: "fruits", carrot: "vegs" });
  });

  test("numeric values", () => {
    expect(invertValues({ a: [1, 2], b: [3] }))
      .toEqual({ 1: "a", 2: "a", 3: "b" });
  });

  test("empty object", () => {
    expect(invertValues({})).toEqual({});
  });

  test("key with empty array", () => {
    expect(invertValues({ x: [] })).toEqual({});
  });

  test("single key single value", () => {
    expect(invertValues({ color: ["red"] })).toEqual({ red: "color" });
  });

  test("multiple keys with multiple values", () => {
    expect(invertValues({ small: ["s", "xs"], large: ["l", "xl"] }))
      .toEqual({ s: "small", xs: "small", l: "large", xl: "large" });
  });
});
