/**
 * Two Sum
 *
 * Given an array of numbers and a target number, return the indices of the
 * two numbers that add up to the target.
 *
 * You may assume each input has exactly one solution, and you may not use
 * the same element twice. Return the answer as an array of two indices.
 *
 * Examples:
 *   twoSum([2, 7, 11, 15], 9)   => [0, 1]  (because 2 + 7 = 9)
 *   twoSum([3, 2, 4], 6)        => [1, 2]  (because 2 + 4 = 6)
 *   twoSum([3, 3], 6)           => [0, 1]
 *
 * Hint: A brute force approach uses two nested loops (O(n^2)).
 *       Can you do better using an object/map to store values you've seen?
 */

function twoSum(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    console.log(complement)
    if (map[complement] !== undefined) {
      let ans = [map[complement], i]
      console.log(ans)
      return ans
    } else {
      map[nums[i]] = i
    }
  }
}

twoSum([3, 2, 4, 8, 7, 1], 15)

module.exports = twoSum;
