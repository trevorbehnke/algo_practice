/**
 * Valid Email Characters
 *
 * Given a string, return true if it contains ONLY characters that are
 * valid in an email address: letters, numbers, @, ., _, and -.
 * Return false if any other character is found.
 *
 * Examples:
 *   validEmailChars("user@test.com")        => true
 *   validEmailChars("user name@test.com")   => false  (space)
 *   validEmailChars("user!@test.com")       => false  (!)
 *   validEmailChars("a_b-c@d.e")            => true
 *   validEmailChars("")                     => true   (no invalid chars)
 *
 * Hint: Think about which pattern lets you bail out as soon as you
 *       find something wrong.
 */

// SOLUTION 1
// function validEmailChars(str) {
//   const valid = /^[a-zA-Z0-9@._-]*$/
//   for (let i = 0; i < str.length; i++) {
//     if (!valid.test(str[i])) {
//       return false
//     }
//   }
//   return true
// }

// SOLUTION 2
function validEmailChars(str) {
  return /^[a-zA-Z0-9@._-]*$/.test(str)
}

validEmailChars("user@test.com")        // => true
validEmailChars("user name@test.com")   // => false  (space)
validEmailChars("user!@test.com")       // => false  (!)
validEmailChars("a_b-c@d.e")            // => true
validEmailChars("")                     // => true   (no invalid chars)

module.exports = validEmailChars;
