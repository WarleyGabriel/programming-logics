// Have the function FindIntersection(strArr) read the array
// of strings stored in strArr which will contain 2 elements:
// the first element will represent a list of comma-separated
// numbers sorted in ascending order, the second element will
// represent a second list of comma-separated numbers (also sorted).
// Your goal is to return a comma-separated string containing the
// numbers that occur in elements of strArr in sorted order.
// If there is no intersection, return the string false.

function FindIntersection(strArr) {
  const arrA = strArr[0].split(", ");
  const arrB = strArr[1].split(", ");
  let result = "";

  for (let current of arrA) {
    if (arrB.find((item) => item === current)) {
      result = result ? `${result},${Number(current)}` : current;
    }
  }

  return result ? result : "false";
}

// Examples
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
const testCase1 = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
// Output: 1,4,13

// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
const testCase2 = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];
// Output: 1,9,10

// Input: ["1, 3, 9, 10, 17, 18", "2, 4, 8, 11"]
const testCase3 = ["1, 3, 9, 10, 17, 18", "2, 4, 8, 11"];
// Output: false

console.time("executionsTime - testCase1");
console.log(FindIntersection(testCase1));
console.timeEnd("executionsTime - testCase1");

console.time("executionsTime - testCase1");
console.log(FindIntersection(testCase1));
console.timeEnd("executionsTime - testCase1");

console.time("executionsTime - testCase2");
console.log(FindIntersection(testCase2));
console.timeEnd("executionsTime - testCase2");

console.time("executionsTime - testCase3");
console.log(FindIntersection(testCase1));
console.timeEnd("executionsTime - testCase3");
