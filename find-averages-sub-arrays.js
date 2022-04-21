// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

function findAveragesOfSubArrays(arr, k) {
  let result = [];

  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0.0;
    for (let j = i; j < k + i; j++) {
      sum += arr[j];
    }
    result.push(sum / k);
  }
  return result;
}

const result = findAveragesOfSubArrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);

console.log("Averages of subarrays of size K: ", result);
// Output: [2.2, 2.8, 2.4, 3.6, 2.8]
