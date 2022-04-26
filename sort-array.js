const arr = [5, 1, 3, 2, 6, 7];

function sort(arr) {
  const newArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] < newArr[j]) {
        newArr.splice(j, 0, arr[i]);
        break;
      } else if (j === newArr.length - 1) {
        newArr.push(arr[i]);
        break;
      }
    }
  }
  return newArr;
}

const result = sort(arr);
console.log(result);

// ----- // // ----- // // ----- // // ----- //

function sortOriginal(arr) {
  return arr.sort();
}

console.log(sortOriginal(arr));

const arrOfLetters = ["b", "c", "a", "d", "g", "f"];
console.log(sortOriginal(arrOfLetters));

const arrOfLettersAndNumbers = [
  2,
  "b",
  4,
  "c",
  1,
  "a",
  "d",
  "g",
  "f",
  23,
  11,
  "0",
];
console.log(sortOriginal(arrOfLettersAndNumbers));
