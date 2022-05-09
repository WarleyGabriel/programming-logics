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

// o(n * n log n)
function longestSubsequence(array) {
  let maxLength = 0;

  // o(n)
  for (let i = 0; i < array.length; i++) {
    let shouldFind = array[i] + 1;
    let currentLength = 1;

    // o(n long n)
    for (let j = i; j < array.length; j++) {
      if (shouldFind === array[j]) {
        currentLength += 1;
        shouldFind = array[j] + 1;
      }
    }

    maxLength = Math.max(currentLength, maxLength);
  }
  return maxLength;
}

const result = longestSubsequence([2, 1, 3, 2, 4, 3, 2, 5, 4, 5]);
console.log(result);
