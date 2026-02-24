/**
 * Count By
 *
 * Given an array and a callback function, return an object where the keys
 * are the results of calling the callback on each element, and the values
 * are the count of elements that produced that result.
 *
 * Examples:
 *   countBy([1, 2, 3, 4, 5], n => n % 2 === 0 ? "even" : "odd")
 *     => { odd: 3, even: 2 }
 *
 *   countBy(["hi", "hello", "hey", "ha"], w => w[0])
 *     => { h: 4 }
 *
 *   countBy([1, 2, 3], n => n > 2 ? "big" : "small")
 *     => { small: 2, big: 1 }
 *
 * Hint: This is the frequency map pattern, but instead of counting the
 *       element itself, you count the RESULT of calling the function on it.
 *       Call the function: let key = callback(arr[i])
 *
 * Pattern: Frequency map with a transform.
 */

// SOLUTION 1
function countBy(arr, callback) {
  let map = {}
  arr.forEach((val) => {
    let result = callback(val)
    !map[result] ? map[result] = 1 : map[result]++
  })
  return map
}

countBy([1, 2, 3, 4, 5], n => n % 2 === 0 ? "even" : "odd")
// => { odd: 3, even: 2 }

countBy(["hi", "hello", "hey", "ha"], w => w[0])
// => { h: 4 }

countBy([1, 2, 3], n => n > 2 ? "big" : "small")
// => { small: 2, big: 1 }

module.exports = countBy;
