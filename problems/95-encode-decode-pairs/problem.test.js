const { encode, decode } = require("./problem");

describe("95 - Encode and Decode Key-Value Pairs", () => {
  describe("encode", () => {
    test("encodes multiple pairs", () => {
      expect(encode({ color: "red", size: "large" })).toBe(
        "color=red&size=large"
      );
    });

    test("encodes single pair", () => {
      expect(encode({ page: "1" })).toBe("page=1");
    });

    test("empty object", () => {
      expect(encode({})).toBe("");
    });
  });

  describe("decode", () => {
    test("decodes multiple pairs", () => {
      expect(decode("color=red&size=large")).toEqual({
        color: "red",
        size: "large",
      });
    });

    test("decodes single pair", () => {
      expect(decode("page=1")).toEqual({ page: "1" });
    });

    test("empty string", () => {
      expect(decode("")).toEqual({});
    });
  });

  describe("round trip", () => {
    test("encode then decode returns original", () => {
      const obj = { name: "Alice", role: "admin" };
      expect(decode(encode(obj))).toEqual(obj);
    });
  });
});
