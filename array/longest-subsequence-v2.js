// Given an array of numbers, find the longest subsequence (not necessarily consecutive),
// where every next value is 1 bigger than the previous one.

// Example:
// 2 1 3 2 4 3 2 5 4 5

// Question:
// Find the length of the longest subsequence

// 2
// 2 + 1 = 3
// 3 + 1 = 4
// 4 + 1 = 5
// 4

// 1
// 1 + 1 = 2
// 2 + 1 = 3
// 3 + 1 = 4
// 4 + 1 = 5
// 5

function longestSubsequence(arr) {
  let maxLength = 0;

  const obj = generateObject(arr);

  return maxLength;
}

function generateObject(arr) {
  return arr.reduce((acc, item, index) => {
    acc[index] = item;
    return acc;
  }, {});
}

const result = longestSubsequence([2, 1, 3, 2, 4, 3, 2, 5, 4, 5]);
console.log(result);
