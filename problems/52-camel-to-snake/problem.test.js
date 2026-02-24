const camelToSnake = require("./problem");

describe("52 - Camel to Snake Case", () => {
  test("basic camelCase", () => {
    expect(camelToSnake("helloWorld")).toBe("hello_world");
  });

  test("multiple humps", () => {
    expect(camelToSnake("getElementById")).toBe("get_element_by_id");
  });

  test("already lowercase", () => {
    expect(camelToSnake("alreadylower")).toBe("alreadylower");
  });

  test("consecutive uppercase", () => {
    expect(camelToSnake("XMLParser")).toBe("x_m_l_parser");
  });

  test("empty string", () => {
    expect(camelToSnake("")).toBe("");
  });

  test("single word", () => {
    expect(camelToSnake("hello")).toBe("hello");
  });

  test("uppercase at end", () => {
    expect(camelToSnake("testA")).toBe("test_a");
  });
});
