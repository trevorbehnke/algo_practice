const {
  isStrictlyEqual, isTruthy, yesOrNo, bigger, isBetween,
  isDefined, evenOrOdd, startsWithCapital, numberOrZero, bothOrNeither
} = require("./02-comparisons");

describe("Syntax Drill: Comparisons & Conditionals", () => {
  test("1. isStrictlyEqual", () => {
    expect(isStrictlyEqual(1, 1)).toBe(true);
    expect(isStrictlyEqual(1, "1")).toBe(false);
    expect(isStrictlyEqual("a", "a")).toBe(true);
    expect(isStrictlyEqual(null, undefined)).toBe(false);
  });

  test("2. isTruthy", () => {
    expect(isTruthy(1)).toBe(true);
    expect(isTruthy(0)).toBe(false);
    expect(isTruthy("")).toBe(false);
    expect(isTruthy("hello")).toBe(true);
    expect(isTruthy(null)).toBe(false);
    expect(isTruthy(undefined)).toBe(false);
  });

  test("3. yesOrNo", () => {
    expect(yesOrNo(1)).toBe("yes");
    expect(yesOrNo(0)).toBe("no");
    expect(yesOrNo("hi")).toBe("yes");
    expect(yesOrNo("")).toBe("no");
  });

  test("4. bigger", () => {
    expect(bigger(5, 3)).toBe(5);
    expect(bigger(2, 9)).toBe(9);
    expect(bigger(4, 4)).toBe(4);
  });

  test("5. isBetween", () => {
    expect(isBetween(5, 1, 10)).toBe(true);
    expect(isBetween(0, 1, 10)).toBe(false);
    expect(isBetween(1, 1, 10)).toBe(true);
    expect(isBetween(10, 1, 10)).toBe(true);
    expect(isBetween(11, 1, 10)).toBe(false);
  });

  test("6. isDefined", () => {
    expect(isDefined(42)).toBe(true);
    expect(isDefined(undefined)).toBe(false);
    expect(isDefined(0)).toBe(true);
    expect(isDefined(null)).toBe(true);
    expect(isDefined("")).toBe(true);
  });

  test("7. evenOrOdd", () => {
    expect(evenOrOdd(4)).toBe("even");
    expect(evenOrOdd(7)).toBe("odd");
    expect(evenOrOdd(0)).toBe("even");
  });

  test("8. startsWithCapital", () => {
    expect(startsWithCapital("Hello")).toBe(true);
    expect(startsWithCapital("hello")).toBe(false);
    expect(startsWithCapital("ABC")).toBe(true);
  });

  test("9. numberOrZero", () => {
    expect(numberOrZero(42)).toBe(42);
    expect(numberOrZero("hello")).toBe(0);
    expect(numberOrZero(null)).toBe(0);
    expect(numberOrZero(0)).toBe(0);
  });

  test("10. bothOrNeither", () => {
    expect(bothOrNeither(1, 1)).toBe(true);
    expect(bothOrNeither(0, 0)).toBe(true);
    expect(bothOrNeither(1, 0)).toBe(false);
    expect(bothOrNeither(0, 1)).toBe(false);
  });
});
