// Example 1:
// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

// Example 2:
// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

// Example 3:
// Input: [3, 4, 1, 1, 6], S=8
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to ‘8’ are [3, 4, 1] or [1, 1, 6].

function smallestSubarraySum(arr, s) {
  let windowSum = 0,
    windowStart = 0,
    minLength = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // windowEnd = 0 | windowSum = 2
    // windowEnd = 1 | windowSum = 3
    // windowEnd = 2 | windowSum = 8
    windowSum += arr[windowEnd];

    while (windowSum >= s) {
      // windowEnd = 2 - windowStart = 0
      let windowDiff = windowEnd - windowStart;

      // minLength = Infinity | windowDiff = 2 + 1
      minLength = Math.min(minLength, windowDiff + 1);

      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(
  `Smallest subarray length: ${smallestSubarraySum([2, 1, 5, 2, 3, 2], 7)}`
);

console.log(
  `Smallest subarray length: ${smallestSubarraySum([2, 1, 5, 2, 8], 7)}`
);

console.log(
  `Smallest subarray length: ${smallestSubarraySum([3, 4, 1, 1, 6], 8)}`
);
