/**
 * FizzBuzz
 *
 * Given a number n, return an array of strings from 1 to n where:
 *   - If the number is divisible by 3, use "Fizz"
 *   - If the number is divisible by 5, use "Buzz"
 *   - If divisible by both 3 and 5, use "FizzBuzz"
 *   - Otherwise, use the number as a string
 *
 * Examples:
 *   fizzBuzz(5)  => ["1", "2", "Fizz", "4", "Buzz"]
 *   fizzBuzz(15) => ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
 *
 * Hint: The modulo operator (%) gives you the remainder of division.
 *       6 % 3 === 0 means 6 is divisible by 3.
 *       Order matters — check divisible by both FIRST.
 *
 * Pattern: Build and return + conditional logic.
 */

function fizzBuzz(n) {
  let strArr = []
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      strArr.push("FizzBuzz")
    } else if (i % 5 === 0) {
      strArr.push("Buzz")
    } else if (i % 3 === 0) {
      strArr.push("Fizz")
    } else {
      strArr.push(i.toString())
    }
  }
  return strArr
}

fizzBuzz(35)

module.exports = fizzBuzz;
