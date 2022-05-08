// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

function sortArrayByParity(nums) {
  const result = [];
  for (let num of nums) {
    if (num % 2 !== 0) {
      result.push(num);
    } else {
      result.unshift(num);
    }
  }

  return result;
}

// Input: nums = [3,1,2,4]
const testCase1 = [3, 1, 2, 4];
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Input: nums = [0]
const testCase2 = [0];
// Output: [0]

// Input: nums = [0,1]
const testCase3 = [0, 1];
// Output: [0,1]

// Input: nums = [1,0]
const testCase4 = [1, 0];
// Output: [0,1]

console.log(sortArrayByParity(testCase1));
console.log(sortArrayByParity(testCase2));
console.log(sortArrayByParity(testCase3));
console.log(sortArrayByParity(testCase4));
