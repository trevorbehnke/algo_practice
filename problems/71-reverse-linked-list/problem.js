/**
 * Reverse Linked List
 *
 * Given the head of a linked list, reverse it and return the new head.
 * This is a classic interview problem.
 *
 * Remember: a node is { value: ..., next: ... }
 *
 * Examples:
 *   reverse(1 → 2 → 3)  => 3 → 2 → 1
 *   reverse(1 → 2)       => 2 → 1
 *   reverse(1)            => 1
 *   reverse(null)         => null
 *
 * (Arrow notation is shorthand — the actual input is nested objects)
 *
 * Hint: Use three pointers: prev, current, and next.
 *   1. Start with prev = null, current = head
 *   2. While current is not null:
 *      a. Save current.next in a temp variable (so you don't lose it)
 *      b. Point current.next backwards to prev
 *      c. Move prev forward to current
 *      d. Move current forward to the saved next
 *   3. When done, prev is the new head
 *
 * Think of it like flipping each arrow one at a time:
 *   1 → 2 → 3 → null
 *   null ← 1   2 → 3 → null   (flipped first arrow)
 *   null ← 1 ← 2   3 → null   (flipped second arrow)
 *   null ← 1 ← 2 ← 3          (flipped third arrow, done!)
 *
 * Pattern: Three-pointer linked list manipulation (new!).
 */

function reverse(head) {
  let prev = null
  let current = head
  while (current !== null) {
    let temp = current.next
    current.next = prev
    prev = current
    current = temp
  }
  console.log(prev)
  return prev
}

reverse({ value: 1, next: { value: 2, next: { value: 3, next: null } } })
// => { value: 3, next: { value: 2, next: { value: 1, next: null } } }                            

reverse({ value: 1, next: { value: 2, next: null } })
// => { value: 2, next: { value: 1, next: null } }                                                

reverse({ value: 1, next: null })
// => { value: 1, next: null }

reverse(null)
// => null

module.exports = reverse;
