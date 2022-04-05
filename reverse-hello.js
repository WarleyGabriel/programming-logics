function reverseWord(word) {
  const wordArr = word.split("");

  let newWord = "";

  for (let index = 0; index < wordArr.length; index++) {
    newWord = newWord.concat(wordArr[wordArr.length - index - 1]);
  }

  return newWord;
}

const word = "hello"; // olleh
const result = reverseWord(word);
console.log(result);
