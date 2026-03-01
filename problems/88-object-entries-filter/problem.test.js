const filterByPrefix = require("./problem");

describe("88 - Object Entries Filter", () => {
  test("filters by prefix", () => {
    expect(
      filterByPrefix({ color_red: 1, color_blue: 2, size: 3 }, "color_")
    ).toEqual({ color_red: 1, color_blue: 2 });
  });

  test("different prefix", () => {
    expect(filterByPrefix({ a_x: 1, a_y: 2, b_z: 3 }, "a_")).toEqual({
      a_x: 1,
      a_y: 2,
    });
  });

  test("no matches", () => {
    expect(filterByPrefix({ foo: 1, bar: 2 }, "baz")).toEqual({});
  });

  test("empty object", () => {
    expect(filterByPrefix({}, "x")).toEqual({});
  });

  test("all match", () => {
    expect(filterByPrefix({ pre_a: 1, pre_b: 2 }, "pre_")).toEqual({
      pre_a: 1,
      pre_b: 2,
    });
  });
});
