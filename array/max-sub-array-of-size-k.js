// Example 1:
// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

// Example 2:
// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

function maxSubArrayOfSizeK(arr, k) {
  let currentSum = 0;
  let maxSum = 0;
  let startWindow = 0;
  for (let endWindow = 0; endWindow < arr.length; endWindow++) {
    currentSum += arr[endWindow];

    if (endWindow >= k - 1) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= arr[startWindow];
      startWindow += 1;
    }
  }

  return maxSum;
}

const result = maxSubArrayOfSizeK([2, 1, 5, 1, 3, 2], 3);
console.log(result);

const result2 = maxSubArrayOfSizeK([2, 3, 4, 1, 5], 2);
console.log(result2);
