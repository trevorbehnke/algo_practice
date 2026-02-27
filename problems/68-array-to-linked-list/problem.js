/**
 * Array to Linked List
 *
 * This is the reverse of problem 64. Given an array, convert it into
 * a linked list and return the head node.
 *
 * Remember: a linked list node is { value: ..., next: ... }
 * The last node's next is null.
 *
 * Examples:
 *   fromArray([1, 2, 3])
 *     => { value: 1, next: { value: 2, next: { value: 3, next: null } } }
 *
 *   fromArray(["a"])
 *     => { value: "a", next: null }
 *
 *   fromArray([])
 *     => null
 *
 * Hint: Work BACKWARDS through the array. Start with null (the end of
 *       the list). For each element from right to left, create a new
 *       node that points to the previous one:
 *
 *       let head = null
 *       for (let i = arr.length - 1; i >= 0; i--) {
 *         head = { value: arr[i], next: head }
 *       }
 *
 *       Each new node wraps around the existing chain.
 *
 * Pattern: Build from the tail — reverse construction.
 */

function fromArray(arr) {
  // Your code here
}

module.exports = fromArray;
