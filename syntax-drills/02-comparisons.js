/**
 * SYNTAX DRILL: Comparisons & Conditionals
 *
 * Practice with ===, !==, >, <, >=, <=, truthy/falsy, and ternaries.
 * Each function is 1-3 lines max.
 */

// 1. Return true if a and b are strictly equal (same value AND same type)
function isStrictlyEqual(a, b) {
  // isStrictlyEqual(1, 1)     => true
  // isStrictlyEqual(1, "1")   => false
  return a === b ? true : false
}

// 2. Return true if the value is truthy, false if falsy
function isTruthy(val) {
  // isTruthy(1)         => true
  // isTruthy(0)         => false
  // isTruthy("")        => false
  // isTruthy("hello")   => true
  // isTruthy(null)      => false
  // isTruthy(undefined) => false
  return val ? true : false
}

// 3. Return "yes" if val is truthy, "no" if falsy. Use a ternary operator.
function yesOrNo(val) {
  // yesOrNo(1)    => "yes"
  // yesOrNo(0)    => "no"
  return val ? "yes" : "no"
}

// 4. Return the bigger of two numbers. If equal, return either.
function bigger(a, b) {
  // bigger(5, 3) => 5
  // bigger(2, 9) => 9
  return a > b ? a : b
}

// 5. Return true if num is between min and max (inclusive)
function isBetween(num, min, max) {
  // isBetween(5, 1, 10)  => true
  // isBetween(0, 1, 10)  => false
  // isBetween(1, 1, 10)  => true
  return num >= min && num <= max ? true : false
}

// 6. Return true if the value is NOT undefined
function isDefined(val) {
  // isDefined(42)        => true
  // isDefined(undefined) => false
  // isDefined(0)         => true
  // isDefined(null)      => true  (null is defined, just empty!)
  return val !== undefined ? true : false
}

// 7. Return "even" or "odd" based on the number
function evenOrOdd(num) {
  // evenOrOdd(4) => "even"
  // evenOrOdd(7) => "odd"
  return num % 2 === 0 ? "even" : "odd"
}

// 8. Return true if the string starts with a capital letter (A-Z)
function startsWithCapital(str) {
  // startsWithCapital("Hello") => true
  // startsWithCapital("hello") => false
  // Hint: str[0] >= "A" && str[0] <= "Z"
  // Or: str[0] === str[0].toUpperCase() && str[0] !== str[0].toLowerCase()
  return str[0] === str[0].toUpperCase() ? true : false
}

// 9. Return the value if it's a number, otherwise return 0
function numberOrZero(val) {
  // numberOrZero(42)      => 42
  // numberOrZero("hello") => 0
  // numberOrZero(null)    => 0
  return typeof val === 'number' ? val : 0
}

// 10. Return true if BOTH a and b are truthy, OR if NEITHER is truthy
function bothOrNeither(a, b) {
  // bothOrNeither(1, 1)   => true  (both truthy)
  // bothOrNeither(0, 0)   => true  (neither truthy)
  // bothOrNeither(1, 0)   => false (only one)
  // bothOrNeither(0, 1)   => false (only one)
  return (a && b) || (!a && !b) ? true : false
}

module.exports = {
  isStrictlyEqual, isTruthy, yesOrNo, bigger, isBetween,
  isDefined, evenOrOdd, startsWithCapital, numberOrZero, bothOrNeither
};
