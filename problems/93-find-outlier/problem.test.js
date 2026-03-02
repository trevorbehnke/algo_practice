const findOutlier = require("./problem");

describe("93 - Find Outlier", () => {
  test("odd outlier at end", () => {
    expect(findOutlier([2, 4, 6, 8, 3])).toBe(3);
  });

  test("even outlier at end", () => {
    expect(findOutlier([1, 3, 5, 7, 4])).toBe(4);
  });

  test("odd outlier in middle", () => {
    expect(findOutlier([2, 6, 8, 10, 3, 12])).toBe(3);
  });

  test("even outlier at end small array", () => {
    expect(findOutlier([1, 1, 1, 2])).toBe(2);
  });

  test("outlier at start", () => {
    expect(findOutlier([4, 1, 3, 5, 7])).toBe(4);
  });

  test("negative numbers", () => {
    expect(findOutlier([-2, -4, -6, 1])).toBe(1);
  });
});
