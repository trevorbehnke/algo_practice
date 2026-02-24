const countBy = require("./problem");

describe("41 - Count By", () => {
  test("counts odd and even", () => {
    expect(countBy([1, 2, 3, 4, 5], (n) => (n % 2 === 0 ? "even" : "odd"))).toEqual({
      odd: 3,
      even: 2,
    });
  });

  test("counts by first letter", () => {
    expect(countBy(["hi", "hello", "hey", "ha"], (w) => w[0])).toEqual({
      h: 4,
    });
  });

  test("counts by threshold", () => {
    expect(countBy([1, 2, 3], (n) => (n > 2 ? "big" : "small"))).toEqual({
      small: 2,
      big: 1,
    });
  });

  test("counts by string length", () => {
    expect(countBy(["a", "bb", "ccc", "dd", "e"], (s) => s.length)).toEqual({
      1: 2,
      2: 2,
      3: 1,
    });
  });

  test("works with empty array", () => {
    expect(countBy([], (x) => x)).toEqual({});
  });

  test("all same group", () => {
    expect(countBy([1, 2, 3], () => "same")).toEqual({ same: 3 });
  });
});
