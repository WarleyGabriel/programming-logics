// Test cases

// 1
// Input: 3[abc]4[ab]c
// Output: abcabcabcababababc

// 2
// Input: 10[a]
// Output: aaaaaaaaaa

// 3
// Input: 2[3[a]b]
// Output: aaabaaab

function getCurrentNumber(arr, currentResult = "") {
  let result = currentResult;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      result = `${result}${arr[i]}`;
      arr.splice(i, 1);

      return getCurrentNumber(arr, result);
    }
    return result;
  }
}

function getCurrentLetters(arr, currentResult = "") {
  let result = currentResult;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "[") {
      continue;
    }

    if (arr[i] === "]") {
      return result;
    }

    if (isNaN(arr[i])) {
      result = `${result}${arr[i]}`;
      arr.splice(i, 1);

      return getCurrentLetters(arr, result);
    }
  }
  return result;
}

function decompressString(str) {
  const inputArr = str.split("");
  let result = [];

  let shouldAddLetters = false;

  for (let i = 0; i < inputArr.length; i++) {
    const currentItem = inputArr[i];

    if (!isNaN(currentItem)) {
      const newArr = inputArr.slice(i);
      const currentNumber = getCurrentNumber(newArr, "");

      if (currentNumber.length > 1) {
        i += currentNumber.length;
      }

      result[result.length] = { qty: currentNumber, letters: "" };
      shouldAddLetters = true;
    }

    if (shouldAddLetters) {
      const newArr = inputArr.slice(i + 1);
      const currentLetters = getCurrentLetters(newArr, "");

      result[result.length - 1].letters = currentLetters;

      shouldAddLetters = false;
    }

    if (
      currentItem === "]" &&
      inputArr.length - 1 > i &&
      isNaN(inputArr[i + 1])
    ) {
      const newArr = inputArr.slice(i + 1);
      const currentLetters = getCurrentLetters(newArr, "");

      result[result.length] = { qty: "1", letters: currentLetters };
    }
  }

  return result;
}

function printStr(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = Number(arr[i].qty);

    for (let j = 0; j < currentNumber; j++) {
      result = `${result}${arr[i].letters}`;
    }
  }

  console.log(result);
}

const testCase1 = "3[abc]4[ab]c"; // abcabcabcababababc
const testCase2 = "10[a]"; // aaaaaaaaaa
const testCase3 = "123[a]4[b]"; // aaaaaaaaaa....bbbb
const testCase4 = "2[3[a]b]"; // aaabaaab

const result = decompressString(testCase3);
console.log(result);

printStr(result);
