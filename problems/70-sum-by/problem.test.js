const sumBy = require("./problem");

describe("70 - Sum By", () => {
  test("sums a key", () => {
    expect(sumBy([{ n: 4 }, { n: 2 }, { n: 8 }], "n")).toBe(14);
  });

  test("sums ages", () => {
    expect(sumBy([{ age: 25 }, { age: 30 }, { age: 35 }], "age")).toBe(90);
  });

  test("skips missing keys", () => {
    expect(sumBy([{ x: 1 }, { x: 2 }, { y: 3 }], "x")).toBe(3);
  });

  test("empty array", () => {
    expect(sumBy([], "n")).toBe(0);
  });

  test("all missing key", () => {
    expect(sumBy([{ a: 1 }, { b: 2 }], "z")).toBe(0);
  });

  test("single object", () => {
    expect(sumBy([{ score: 100 }], "score")).toBe(100);
  });
});
