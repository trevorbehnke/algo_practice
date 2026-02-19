const fizzBuzz = require("./problem");

describe("11 - FizzBuzz", () => {
  test("handles 1 to 5", () => {
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  test("handles FizzBuzz at 15", () => {
    const result = fizzBuzz(15);
    expect(result[14]).toBe("FizzBuzz");
  });

  test("handles n of 1", () => {
    expect(fizzBuzz(1)).toEqual(["1"]);
  });

  test("Fizz at correct positions", () => {
    const result = fizzBuzz(6);
    expect(result[2]).toBe("Fizz");
    expect(result[5]).toBe("Fizz");
  });

  test("Buzz at correct positions", () => {
    const result = fizzBuzz(10);
    expect(result[4]).toBe("Buzz");
    expect(result[9]).toBe("Buzz");
  });

  test("numbers are strings", () => {
    const result = fizzBuzz(2);
    expect(result[0]).toBe("1");
    expect(typeof result[0]).toBe("string");
  });
});
