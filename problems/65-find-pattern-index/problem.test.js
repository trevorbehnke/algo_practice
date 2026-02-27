const findPattern = require("./problem");

describe("65 - Find Pattern Index", () => {
  test("up then down", () => {
    expect(findPattern([1, 3, 2, 5, 4], ["up", "down"])).toBe(0);
  });

  test("up up down", () => {
    expect(findPattern([1, 2, 3, 2, 1], ["up", "up", "down"])).toBe(0);
  });

  test("down then same", () => {
    expect(findPattern([5, 3, 3, 1], ["down", "same"])).toBe(0);
  });

  test("pattern not found", () => {
    expect(findPattern([1, 2, 3], ["down"])).toBe(-1);
  });

  test("empty array", () => {
    expect(findPattern([], ["up"])).toBe(-1);
  });

  test("pattern found later", () => {
    expect(findPattern([1, 2, 5, 3, 4], ["down", "up"])).toBe(2);
  });

  test("single step pattern", () => {
    expect(findPattern([3, 3, 1], ["same"])).toBe(0);
  });
});
