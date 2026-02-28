const compose = require("./problem");

describe("75 - Compose Two Functions", () => {
  test("double then add one", () => {
    const double = (x) => x * 2;
    const addOne = (x) => x + 1;
    const fn = compose(addOne, double);
    expect(fn(5)).toBe(11);
  });

  test("add one then double", () => {
    const double = (x) => x * 2;
    const addOne = (x) => x + 1;
    const fn = compose(double, addOne);
    expect(fn(5)).toBe(12);
  });

  test("string composition", () => {
    const upper = (s) => s.toUpperCase();
    const greet = (s) => "Hello " + s;
    const fn = compose(upper, greet);
    expect(fn("world")).toBe("HELLO WORLD");
  });

  test("returns a function", () => {
    const fn = compose((x) => x, (x) => x);
    expect(typeof fn).toBe("function");
  });

  test("works with different values", () => {
    const square = (x) => x * x;
    const negate = (x) => -x;
    const fn = compose(negate, square);
    expect(fn(3)).toBe(-9);
    expect(fn(4)).toBe(-16);
  });
});
