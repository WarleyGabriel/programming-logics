// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

function findAveragesOfSubArrays(arr, k) {
  let startWindow = 0;
  const result = [];
  let sum = 0.0;

  for (let endWindow = 0; endWindow < arr.length; endWindow++) {
    sum += arr[endWindow];

    if (endWindow >= k - 1) {
      result.push(sum / k);
      sum = sum - arr[startWindow];
      startWindow += 1;
    }
  }

  return result;
}

const result = findAveragesOfSubArrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);

console.log("Averages of subarrays of size K: ", result);
// Output: [2.2, 2.8, 2.4, 3.6, 2.8]
