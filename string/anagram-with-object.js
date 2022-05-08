// anagram ->  two words are an anagram if they have the same chars

// asd das -> true
// asd dsaa -> false
// as dsa -> false

// write a function that takes 2 strings and returns if they are an anagram

const first = "asdaa";
const second = "dasaa";

(function isAnAnagram(first, second) {
  console.time("Anagram");

  const charCountFirst = getCharCount(first);
  const charCountSecond = getCharCount(second);

  const isAnagram = Object.keys(charCountFirst).every(
    (key) => charCountFirst[key] === charCountSecond[key]
  );

  console.log(isAnagram);
  console.timeEnd("Anagram");
})(first, second);

function getCharCount(str) {
  return str.split("").reduce((result, l) => {
    if (result[l]) {
      result[l]++;
    } else {
      result[l] = 1;
    }
    return result;
  }, {});
}
