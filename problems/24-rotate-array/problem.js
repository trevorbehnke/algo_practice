/**
 * Rotate Array
 *
 * Given an array and a number k, rotate the array to the right by k positions.
 * Elements that fall off the end wrap around to the beginning.
 *
 * Examples:
 *   rotate([1, 2, 3, 4, 5], 1)   => [5, 1, 2, 3, 4]
 *   rotate([1, 2, 3, 4, 5], 2)   => [4, 5, 1, 2, 3]
 *   rotate([1, 2, 3, 4, 5], 5)   => [1, 2, 3, 4, 5]  (full rotation)
 *   rotate([1, 2, 3, 4, 5], 7)   => [4, 5, 1, 2, 3]  (same as k=2)
 *   rotate([1, 2], 0)            => [1, 2]
 *
 * Hint: If k is larger than the array length, use modulo (%) to find the
 *       effective rotation. Then think about using slice to split the array
 *       into two pieces and rearrange them.
 *
 *       For k=2 on [1,2,3,4,5]: the last 2 elements [4,5] move to the front,
 *       and the rest [1,2,3] go after them.
 *
 * Pattern: Slice and rearrange.
 */

function rotate(arr, k) {
  // Your code here
}

module.exports = rotate;
