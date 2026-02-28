const reverse = require("./problem");

// Helper to build linked list from array
function buildList(arr) {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    head = { value: arr[i], next: head };
  }
  return head;
}

// Helper to convert linked list to array for easy comparison
function toArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  return result;
}

describe("71 - Reverse Linked List", () => {
  test("reverses three nodes", () => {
    expect(toArray(reverse(buildList([1, 2, 3])))).toEqual([3, 2, 1]);
  });

  test("reverses two nodes", () => {
    expect(toArray(reverse(buildList([1, 2])))).toEqual([2, 1]);
  });

  test("single node stays the same", () => {
    expect(toArray(reverse(buildList([1])))).toEqual([1]);
  });

  test("null returns null", () => {
    expect(reverse(null)).toEqual(null);
  });

  test("reverses four nodes", () => {
    expect(toArray(reverse(buildList([10, 20, 30, 40])))).toEqual([40, 30, 20, 10]);
  });

  test("reverses strings", () => {
    expect(toArray(reverse(buildList(["a", "b", "c"])))).toEqual(["c", "b", "a"]);
  });
});
