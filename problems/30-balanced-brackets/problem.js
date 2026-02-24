/**
 * Balanced Brackets
 *
 * Given a string containing only brackets — (), [], {} — determine if
 * the brackets are balanced. Balanced means every opening bracket has a
 * matching closing bracket in the correct order.
 *
 * Examples:
 *   isBalanced("()")         => true
 *   isBalanced("()[]{}")     => true
 *   isBalanced("(]")         => false
 *   isBalanced("([)]")       => false
 *   isBalanced("{[]}")       => true
 *   isBalanced("")           => true
 *
 * Hint: This problem introduces a new data structure concept: the STACK.
 *       A stack is "last in, first out" — like a stack of plates.
 *       In JS, an array works as a stack using push() and pop().
 *
 *       The approach:
 *       - When you see an opening bracket, push it onto the stack.
 *       - When you see a closing bracket, pop from the stack and check
 *         if it matches. If it doesn't match (or the stack is empty),
 *         return false.
 *       - At the end, the stack should be empty (all brackets matched).
 *
 * Pattern: Stack (new concept!).
 */

function isBalanced(str) {
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

isBalanced("()")
isBalanced("()[]{}")
isBalanced("(]")
isBalanced("([)]")
isBalanced("{[]}")
isBalanced("")

module.exports = isBalanced;
