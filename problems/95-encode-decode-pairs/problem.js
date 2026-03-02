/**
 * Encode and Decode Key-Value Pairs
 *
 * Part A: Given an object, encode it into a query string format:
 *   "key1=value1&key2=value2"
 *
 * Part B: Given a query string, decode it back into an object.
 *
 * Examples:
 *   encode({ color: "red", size: "large" })
 *     => "color=red&size=large"
 *
 *   encode({ page: "1" })
 *     => "page=1"
 *
 *   encode({})
 *     => ""
 *
 *   decode("color=red&size=large")
 *     => { color: "red", size: "large" }
 *
 *   decode("page=1")
 *     => { page: "1" }
 *
 *   decode("")
 *     => {}
 *
 * Hint: Think about what string methods and patterns you'd use
 *       to build a string from key-value pairs, and to break a
 *       string back apart into key-value pairs.
 */

// SOLUTION 1
// function encode(obj) {
//   let result = ""
//   let arr1 = Object.keys(obj)
//   let arr2 = Object.values(obj)

//   for (let i = 0; i < arr1.length; i++) {
//     if (i < arr1.length - 1) {
//       result += arr1[i] + "=" + arr2[i] + "&"
//     } else {
//       result += arr1[i] + "=" + arr2[i]
//     }
//   }
//   return result
// }

// function decode(str) {
//   let result = {}
//   if (str.length !== 0) {
//     str.split("&").forEach((str) => {
//       let ans = str.split("=")
//       result[ans[0]] = ans[1]
//     })
//   }
//   return result
// }

// SOLUTION 2
function encode(obj) {
  return Object.entries(obj).map(([key, val]) => key + "=" + val).join("&")
}

function decode(str) {
  if (!str) return {}
  let result = {}
  str.split("&").forEach((pair) => {
    let [key, val] = pair.split("=")
    result[key] = val
  })
  return result
}

encode({ color: "red", size: "large" })
// => "color=red&size=large"

encode({ page: "1" })
// => "page=1"

encode({})
// => ""

decode("color=red&size=large")
// => { color: "red", size: "large" }

decode("page=1")
// => { page: "1" }

decode("")
// => {}

module.exports = { encode, decode };
