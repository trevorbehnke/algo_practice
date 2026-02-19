/**
* Chunk Array
*
* Given an array and a chunk size, split the array into groups (sub-arrays)
* of that size. If the array doesn't divide evenly, the last chunk should
* contain the remaining elements.
*
* Examples:
*   chunkArray([1, 2, 3, 4, 5], 2)  => [[1, 2], [3, 4], [5]]
*   chunkArray([1, 2, 3, 4], 2)     => [[1, 2], [3, 4]]
*   chunkArray([1, 2, 3], 1)        => [[1], [2], [3]]
*   chunkArray([1, 2, 3], 5)        => [[1, 2, 3]]
*
* Hint: arr.slice(start, end) returns a portion of an array without
*       modifying the original. start is inclusive, end is exclusive.
*       Think about stepping through the array in increments of `size`.
*
* Pattern: Build and return, but with a step size in the loop.
*/

function chunkArray(arr, size) {
  let newArr = []
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size))
  }
  console.log({ newArr })
  return newArr
}

chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)

module.exports = chunkArray;
