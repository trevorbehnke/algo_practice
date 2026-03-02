const validEmailChars = require("./problem");

describe("92 - Valid Email Characters", () => {
  test("valid email", () => {
    expect(validEmailChars("user@test.com")).toBe(true);
  });

  test("space is invalid", () => {
    expect(validEmailChars("user name@test.com")).toBe(false);
  });

  test("exclamation is invalid", () => {
    expect(validEmailChars("user!@test.com")).toBe(false);
  });

  test("underscores and dashes are valid", () => {
    expect(validEmailChars("a_b-c@d.e")).toBe(true);
  });

  test("empty string", () => {
    expect(validEmailChars("")).toBe(true);
  });

  test("numbers are valid", () => {
    expect(validEmailChars("user123@test456.com")).toBe(true);
  });

  test("hash is invalid", () => {
    expect(validEmailChars("user#tag@test.com")).toBe(false);
  });
});
