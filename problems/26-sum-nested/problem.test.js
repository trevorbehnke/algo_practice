const sumNested = require("./problem");

describe("26 - Sum Nested", () => {
  test("sums flat array", () => {
    expect(sumNested([1, 2, 3])).toBe(6);
  });

  test("sums one level deep", () => {
    expect(sumNested([1, [2, 3]])).toBe(6);
  });

  test("sums multiple levels deep", () => {
    expect(sumNested([1, [2, [3, [4]]]])).toBe(10);
  });

  test("handles deeply nested single value", () => {
    expect(sumNested([[[[5]]]])).toBe(5);
  });

  test("handles empty array", () => {
    expect(sumNested([])).toBe(0);
  });

  test("handles mix of nested and flat", () => {
    expect(sumNested([1, [2], 3, [4, [5]]])).toBe(15);
  });

  test("handles empty nested arrays", () => {
    expect(sumNested([1, [], [2, []], 3])).toBe(6);
  });
});
