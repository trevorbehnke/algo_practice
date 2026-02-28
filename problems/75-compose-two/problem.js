/**
 * Compose Two Functions
 *
 * Given two functions f and g, return a NEW function that, when called
 * with a value, applies g first, then f: result = f(g(value))
 *
 * This is called "function composition" — combining two functions
 * into one.
 *
 * Examples:
 *   const double = x => x * 2
 *   const addOne = x => x + 1
 *
 *   const doubleThenAdd = compose(addOne, double)
 *   doubleThenAdd(5)   => 11   (double 5 = 10, then add 1 = 11)
 *
 *   const addThenDouble = compose(double, addOne)
 *   addThenDouble(5)   => 12   (add 1 to 5 = 6, then double = 12)
 *
 *   const upper = s => s.toUpperCase()
 *   const greet = s => "Hello " + s
 *   const shoutGreet = compose(upper, greet)
 *   shoutGreet("world")  => "HELLO WORLD"
 *
 * Hint: Return a new function that takes a value, calls g(value),
 *       then passes that result to f:
 *       return function(x) { return f(g(x)) }
 *
 * Pattern: Higher-order function — returning a function (new concept!).
 */

function compose(f, g) {
  return function (x) { return f(g(x)) }
}

const double = x => x * 2
const addOne = x => x + 1
const doubleThenAdd = compose(addOne, double)
doubleThenAdd(5)

module.exports = compose;
