const toQueryParams = require("./problem");

describe("101 - Object to Query Params", () => {
  test("mixed types sorted alphabetically", () => {
    expect(toQueryParams({ color: "red", size: "large", page: 1 }))
      .toBe("color=red&page=1&size=large");
  });

  test("boolean values", () => {
    expect(toQueryParams({ z: true, a: false })).toBe("a=false&z=true");
  });

  test("single key", () => {
    expect(toQueryParams({ name: "test" })).toBe("name=test");
  });

  test("empty object", () => {
    expect(toQueryParams({})).toBe("");
  });

  test("already in order", () => {
    expect(toQueryParams({ a: 1, b: 2, c: 3 })).toBe("a=1&b=2&c=3");
  });

  test("numeric values", () => {
    expect(toQueryParams({ limit: 10, offset: 20 })).toBe("limit=10&offset=20");
  });
});
