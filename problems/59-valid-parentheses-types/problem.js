/**
 * Valid Parentheses (Multiple Types)
 *
 * Given a string containing only the characters '(', ')', '{', '}',
 * '[' and ']', determine if the input string is valid.
 *
 * A string is valid if:
 *   - Open brackets are closed by the same type
 *   - Open brackets are closed in the correct order
 *   - Every close bracket has a matching open bracket
 *
 * Examples:
 *   isValid("()")        => true
 *   isValid("()[]{}")    => true
 *   isValid("(]")        => false
 *   isValid("([)]")      => false
 *   isValid("{[]}")      => true
 *   isValid("")          => true
 *
 * Hint: This is balanced brackets (problem 30) but with three types
 *       instead of one. Use the same stack approach. Create a map of
 *       closing → opening brackets: { ")": "(", "]": "[", "}": "{" }
 *       When you see a closing bracket, check if the top of the stack
 *       is its matching opener.
 *
 * Pattern: Stack (revisiting problem 30 with more complexity).
 */

function isValid(str) {
  let stack = []
  const pairs = { "(": ")", "[": "]", "{": "}" }
  for (let i = 0; i < str.length; i++) {
    if (pairs[str[i]]) {
      stack.push(str[i])
    } else {
      let popped = stack.pop()
      if (pairs[popped] !== str[i]) return false
    }
  }
  return stack.length === 0
}

isValid("()")        // => true
isValid("()[]{}")    // => true
isValid("(]")        // => false
isValid("([)]")      // => false
isValid("{[]}")      // => true
isValid("")          // => true

module.exports = isValid;
