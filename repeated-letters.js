const originalWords = [
  "Pooooortoooooaaakkop",
  "aaaaoooo",
  "Brasil",
  "Macbook Pro",
];

const result = originalWords.map((word) => removeDuplicates(word));

console.log(result);

function removeDuplicates(word) {
  const arrWord = word.split("");
  let result = word;

  arrWord.forEach((letter, index) => {
    if (isDuplicated(arrWord.slice(index + 1), letter)) {
      result = result.replace(new RegExp(letter, "g"), "");
    }
  });

  return result;
}

function isDuplicated(arr, letter) {
  return arr.some((l) => letter === l);
}
