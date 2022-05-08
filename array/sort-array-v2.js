const arr = [5, 1, 3, 2, 6, 7];

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
}

const result = sort(arr);
console.log(result);
