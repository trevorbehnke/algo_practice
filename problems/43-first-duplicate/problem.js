/**
 * First Duplicate
 *
 * Given an array, return the first element that appears more than once.
 * If no duplicates exist, return null.
 *
 * Examples:
 *   firstDuplicate([1, 2, 3, 2, 1])     => 2
 *   firstDuplicate([1, 2, 3, 4])        => null
 *   firstDuplicate(["a", "b", "a"])      => "a"
 *   firstDuplicate([5, 5])              => 5
 *   firstDuplicate([])                  => null
 *
 * Hint: Use a "seen" object (like two-sum, problem 5). As you loop through,
 *       check if you've seen the current element before. If yes, return it
 *       immediately. If no, mark it as seen.
 *
 * Pattern: Hash map lookup with early return.
 */

function firstDuplicate(arr) {
  // Your code here
}

module.exports = firstDuplicate;
