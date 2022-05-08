function findSubsets(nums) {
  const subsets = [];

  subsets.push([]);
  for (i = 0; i < nums.length; i++) {
    currentNumber = nums[i];
    // we will take all existing subsets and insert the current number in them to create new subsets

    const n = subsets.length;
    for (j = 0; j < n; j++) {
      // create a new subset from the existing subset and insert the current element to it
      const set1 = [...subsets[j]]; // clone the permutation
      console.log(set1);
      set1.push(currentNumber);
      console.log(set1);
      subsets.push(set1);
    }
  }

  return subsets;
}

// Example 1:
// Input: [1, 3]
// Output: [], [1], [3], [1,3]

// Example 2:
// Input: [1, 5, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]

console.log(findSubsets([1, 3]));
// console.log(findSubsets([1, 5, 3]));
