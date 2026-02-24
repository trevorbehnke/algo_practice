const {
  firstThree, allButFirst, toWords, dashJoin, hasValue, removeSpaces,
  addToEnd, removeLast, repeatStr, sortNums, findChar, replaceFirst
} = require("./03-string-array-methods");

describe("Syntax Drill: String & Array Methods", () => {
  test("1. firstThree", () => {
    expect(firstThree("hello")).toBe("hel");
    expect(firstThree("ab")).toBe("ab");
  });

  test("2. allButFirst", () => {
    expect(allButFirst("hello")).toBe("ello");
    expect(allButFirst("a")).toBe("");
  });

  test("3. toWords", () => {
    expect(toWords("hello world")).toEqual(["hello", "world"]);
    expect(toWords("one")).toEqual(["one"]);
  });

  test("4. dashJoin", () => {
    expect(dashJoin(["a", "b", "c"])).toBe("a-b-c");
    expect(dashJoin(["hello"])).toBe("hello");
  });

  test("5. hasValue", () => {
    expect(hasValue([1, 2, 3], 2)).toBe(true);
    expect(hasValue([1, 2, 3], 5)).toBe(false);
    expect(hasValue(["a", "b"], "a")).toBe(true);
  });

  test("6. removeSpaces", () => {
    expect(removeSpaces("h e l l o")).toBe("hello");
    expect(removeSpaces("no spaces")).toBe("nospaces");
  });

  test("7. addToEnd", () => {
    const original = [1, 2];
    expect(addToEnd(original, 3)).toEqual([1, 2, 3]);
    expect(original).toEqual([1, 2]); // original should not be modified
  });

  test("8. removeLast", () => {
    const original = [1, 2, 3];
    expect(removeLast(original)).toEqual([1, 2]);
    expect(original).toEqual([1, 2, 3]); // original should not be modified
  });

  test("9. repeatStr", () => {
    expect(repeatStr("ha", 3)).toBe("hahaha");
    expect(repeatStr("x", 1)).toBe("x");
  });

  test("10. sortNums", () => {
    expect(sortNums([3, 1, 2])).toEqual([1, 2, 3]);
    expect(sortNums([10, 2, 1])).toEqual([1, 2, 10]);
  });

  test("11. findChar", () => {
    expect(findChar("hello", "l")).toBe(2);
    expect(findChar("hello", "z")).toBe(-1);
  });

  test("12. replaceFirst", () => {
    expect(replaceFirst("hello world", "world", "there")).toBe("hello there");
  });
});
