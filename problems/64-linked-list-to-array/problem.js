/**
 * Linked List to Array (NEW CONCEPT)
 *
 * A linked list is a data structure where each "node" is an object
 * with two properties:
 *   - value: the data stored in this node
 *   - next: a reference to the next node (or null if it's the last one)
 *
 * Example linked list:  { value: 1, next: { value: 2, next: { value: 3, next: null } } }
 * This represents: 1 → 2 → 3
 *
 * Given the head (first node) of a linked list, return an array of
 * all the values.
 *
 * Examples:
 *   toArray({ value: 1, next: { value: 2, next: { value: 3, next: null } } })
 *     => [1, 2, 3]
 *
 *   toArray({ value: "a", next: { value: "b", next: null } })
 *     => ["a", "b"]
 *
 *   toArray({ value: 42, next: null })
 *     => [42]
 *
 *   toArray(null)
 *     => []
 *
 * Hint: Start with a variable called "current" pointing to the head.
 *       While current is not null:
 *         - Push current.value into your result array
 *         - Move to the next node: current = current.next
 *       This is similar to the nested object traversal (problem 55)
 *       but following .next instead of a path.
 *
 * Pattern: Linked list traversal (new data structure!).
 */

function toArray(head) {
  let result = []
  let current = head
  while (current !== null) {
    result.push(current.value)
    current = current.next
  }
  return result
}

toArray({ value: 1, next: { value: 2, next: { value: 3, next: null } } }) // => [1, 2, 3]
toArray({ value: "a", next: { value: "b", next: null } }) // => ["a", "b"]
toArray({ value: 42, next: null }) // => [42]
toArray(null) // => []

module.exports = toArray;
