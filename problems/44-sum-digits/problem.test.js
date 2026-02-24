const sumDigits = require("./problem");

describe("44 - Sum Digits", () => {
  test("sums digits of 123", () => {
    expect(sumDigits(123)).toBe(6);
  });

  test("sums digits of 49", () => {
    expect(sumDigits(49)).toBe(13);
  });

  test("handles zeros in the middle", () => {
    expect(sumDigits(1000)).toBe(1);
  });

  test("single digit", () => {
    expect(sumDigits(7)).toBe(7);
  });

  test("zero", () => {
    expect(sumDigits(0)).toBe(0);
  });

  test("larger number", () => {
    expect(sumDigits(9999)).toBe(36);
  });
});
