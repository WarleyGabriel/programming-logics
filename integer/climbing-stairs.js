// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Input: n = 4
// Output: 5
// Explanation: There are four ways to climb to the top.
// 1. 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 2 steps + 1 step
// 3. 2 steps + 1 step + 1 step
// 4. 1 step + 1 step + 2 steps
// 5. 2 steps + 2 steps

// Input: n = 5
// Output: 8

function climbStairs(n) {
  let arr = [];
  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= n; i++) {
    console.log(arr[i - 1], arr[i - 2]);
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

console.log(climbStairs(6));
