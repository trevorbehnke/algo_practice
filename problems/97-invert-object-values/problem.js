/**
 * Invert Object Values
 *
 * Given an object where each value is an array, return a new object
 * where each element in those arrays becomes a key, mapped back to
 * the original key it came from.
 *
 * You can assume array values are unique across all arrays.
 *
 * Examples:
 *   invertValues({ fruits: ["apple", "banana"], vegs: ["carrot"] })
 *     => { apple: "fruits", banana: "fruits", carrot: "vegs" }
 *
 *   invertValues({ a: [1, 2], b: [3] })
 *     => { 1: "a", 2: "a", 3: "b" }
 *
 *   invertValues({})
 *     => {}
 *
 *   invertValues({ x: [] })
 *     => {}
 *
 * Hint: You need to look inside each value (which is an array)
 *       and build something new from what you find.
 */

function invertValues(obj) {
    let result = {}
    for (const key in obj) {
        obj[key].forEach((el) => {
            result[el] = key
        })
    }
    return result
}

invertValues({ fruits: ["apple", "banana"], vegs: ["carrot"] })
//  => { apple: "fruits", banana: "fruits", carrot: "vegs" }

module.exports = invertValues;
