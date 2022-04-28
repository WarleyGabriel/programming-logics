// Example 1:
// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

// Example 2:
// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".

// Example 3:
// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

// Example 4:
// Input: String="cbbebi", K=10
// Output: 6
// Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".

function longestSubstringWithKDistinct(str, k) {
  let windowStart = 0,
    longestSubstring = 0,
    charFrequency = {};
  const arr = str.split("");

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const rightChar = arr[windowEnd];

    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;

    while (Object.keys(charFrequency).length > k) {
      const leftChar = arr[windowStart];

      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1;
    }

    longestSubstring = Math.max(longestSubstring, windowEnd - windowStart + 1);
  }
  return longestSubstring;
}

console.log(
  `Length of the longest substring: ${longestSubstringWithKDistinct(
    "araaci",
    2
  )}`
); // 4

console.log(
  `Length of the longest substring: ${longestSubstringWithKDistinct(
    "araaci",
    1
  )}`
); // 2

console.log(
  `Length of the longest substring: ${longestSubstringWithKDistinct(
    "cbbebi",
    3
  )}`
); // 5

console.log(
  `Length of the longest substring: ${longestSubstringWithKDistinct(
    "cbbebi",
    10
  )}`
); // 6
