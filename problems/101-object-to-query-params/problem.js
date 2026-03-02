/**
 * Object to Query Params
 *
 * Given an object, return a URL query string. Similar to encode from
 * problem 95, but this time values may be numbers or booleans (convert
 * them to strings), and keys should be sorted alphabetically.
 *
 * Examples:
 *   toQueryParams({ color: "red", size: "large", page: 1 })
 *     => "color=red&page=1&size=large"
 *
 *   toQueryParams({ z: true, a: false })
 *     => "a=false&z=true"
 *
 *   toQueryParams({ name: "test" })
 *     => "name=test"
 *
 *   toQueryParams({})
 *     => ""
 *
 * Hint: You've done something very similar before. What extra step
 *       do you need to guarantee the order?
 */

function toQueryParams(obj) {
    return Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([key, val]) => key + "=" + val)
        .join("&")
}

toQueryParams({ color: "red", size: "large", page: 1 })
//   => "color=red&page=1&size=large"

module.exports = toQueryParams;
