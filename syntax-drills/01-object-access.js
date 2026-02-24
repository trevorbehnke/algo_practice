/**
 * SYNTAX DRILL: Object & Array Access Patterns
 *
 * No algorithms here — just practice accessing data correctly.
 * Fill in each function so the tests pass. Each one is 1-3 lines max.
 */

// 1. Return the value of the "name" property
function getName(obj) {
  // Example: getName({ name: "Alice", age: 25 }) => "Alice"
  return obj["name"]
}

// 2. Return the value at the given key (key is a variable, not a literal)
function getByKey(obj, key) {
  // Example: getByKey({ a: 1, b: 2 }, "b") => 2
  return obj[key]
}

// 3. Return the last element of an array
function getLast(arr) {
  // Example: getLast([10, 20, 30]) => 30
  return arr[arr.length - 1]
}

// 4. Given an array of objects, return the "name" of the object at the given index
function getNameAtIndex(arr, index) {
  // Example: getNameAtIndex([{ name: "A" }, { name: "B" }], 1) => "B"
  return arr[index]["name"]
}

// 5. Given an object with nested objects, return the deeply nested value
function getNestedValue(obj) {
  // Example: getNestedValue({ a: { b: { c: 42 } } }) => 42
  return obj.a.b.c
}

// 6. Set the given key to the given value on the object, then return the object
function setByKey(obj, key, value) {
  // Example: setByKey({}, "x", 10) => { x: 10 }
  obj[key] = value
  return obj
}

// 7. Given an array and an index, return true if the element at that index is "hello"
function isHelloAt(arr, index) {
  // Example: isHelloAt(["hi", "hello", "hey"], 1) => true
  return arr[index] === "hello" ? true : false
}

// 8. Given an object, return an array of its keys
function getKeys(obj) {
  // Example: getKeys({ a: 1, b: 2, c: 3 }) => ["a", "b", "c"]
  return Object.keys(obj)
}

// 9. Given an object, return an array of its values
function getValues(obj) {
  // Example: getValues({ a: 1, b: 2 }) => [1, 2]
  return Object.values(obj)
}

// 10. Given an array of objects and a key, return an array of just that key's values
function pluck(arr, key) {
  // Example: pluck([{ name: "A", age: 1 }, { name: "B", age: 2 }], "name") => ["A", "B"]
  let ans = []
  arr.forEach((obj) => {
    ans.push(obj[key])
  })
  return ans
}

module.exports = {
  getName, getByKey, getLast, getNameAtIndex, getNestedValue,
  setByKey, isHelloAt, getKeys, getValues, pluck
};
