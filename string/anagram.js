// anagram ->  two words are an anagram if they have the same chars

// asd das -> true
// asd dsaa -> false
// as dsa -> false

// write a function that takes 2 strings and returns if they are an anagram

const first = "asd";
const second = "das";

(function isAnAnagram(first, second) {
  console.time("Anagram");

  const firstOrdered = normalizeString(first);
  const secondOrdered = normalizeString(second);

  let isAnagram = false;
  if (firstOrdered === secondOrdered) {
    isAnagram = true;
  }

  console.log(isAnagram);
  console.timeEnd("Anagram");
})(first, second);

function normalizeString(str) {
  return str.split("").sort().join();
}
