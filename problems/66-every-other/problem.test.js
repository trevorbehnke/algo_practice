const everyOther = require("./problem");

describe("66 - Every Other", () => {
  test("odd length array", () => {
    expect(everyOther([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
  });

  test("even length array", () => {
    expect(everyOther(["a", "b", "c", "d"])).toEqual(["a", "c"]);
  });

  test("single element", () => {
    expect(everyOther([10])).toEqual([10]);
  });

  test("empty array", () => {
    expect(everyOther([])).toEqual([]);
  });

  test("two elements", () => {
    expect(everyOther([1, 2])).toEqual([1]);
  });
});
