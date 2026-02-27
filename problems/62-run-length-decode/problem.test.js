const rleDecode = require("./problem");

describe("62 - Run-Length Decode", () => {
  test("basic decode", () => {
    expect(rleDecode("3a2b1c")).toBe("aaabbc");
  });

  test("mixed counts", () => {
    expect(rleDecode("2x3y")).toBe("xxyyy");
  });

  test("no numbers means count of 1", () => {
    expect(rleDecode("abc")).toBe("abc");
  });

  test("multi-digit count", () => {
    expect(rleDecode("10a")).toBe("aaaaaaaaaa");
  });

  test("empty string", () => {
    expect(rleDecode("")).toBe("");
  });

  test("single character with count", () => {
    expect(rleDecode("5z")).toBe("zzzzz");
  });

  test("mix of counted and uncounted", () => {
    expect(rleDecode("3ab2c")).toBe("aaabcc");
  });
});
