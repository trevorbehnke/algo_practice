const groupScores = require("./problem");

describe("91 - Group Scores", () => {
  test("groups multiple people", () => {
    expect(groupScores([
      { name: "Alice", score: 90 },
      { name: "Bob", score: 80 },
      { name: "Alice", score: 95 },
      { name: "Bob", score: 85 },
    ])).toEqual({ Alice: [90, 95], Bob: [80, 85] });
  });

  test("single entry", () => {
    expect(groupScores([{ name: "Eve", score: 100 }])).toEqual({
      Eve: [100],
    });
  });

  test("empty array", () => {
    expect(groupScores([])).toEqual({});
  });

  test("one person multiple scores", () => {
    expect(groupScores([
      { name: "Zoe", score: 70 },
      { name: "Zoe", score: 80 },
      { name: "Zoe", score: 90 },
    ])).toEqual({ Zoe: [70, 80, 90] });
  });

  test("three people", () => {
    expect(groupScores([
      { name: "A", score: 1 },
      { name: "B", score: 2 },
      { name: "C", score: 3 },
    ])).toEqual({ A: [1], B: [2], C: [3] });
  });
});
