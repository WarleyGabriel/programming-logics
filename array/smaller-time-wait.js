// given the array [3,2,1,2,6] result will be 17

function main(arr) {
  let r = 0;
  let sum = 0;

  arr.sort();

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i - 1];
    r += sum;
  }

  console.log("🚀 ~ main ~ sum:", sum);

  return r;
}

const arr = [3, 2, 1, 2, 6];
const r = main(arr);
console.log(r);
