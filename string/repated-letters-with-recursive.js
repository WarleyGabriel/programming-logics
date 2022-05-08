// Given a word, remove all the repated letters and its ocurrences.
// Return the result.

// input ->  "Porto"
// output -> "Prt"

// input ->  "ooooo"
// output -> ""

const originalString = [
  "Pooooortoooooaaakkop",
  "aaaaoooo",
  "Brasil",
  "Macbook Pro",
];

const res = originalString.map((o) => removeDuplicates(o));

console.log(res);

function removeDuplicates(string) {
  if (!string) {
    return "";
  }

  if (string.length === 1) {
    return string;
  }

  const strArray = string.split("");

  const duplicatedChar = getFirstDuplicatedChar(strArray);

  if (duplicatedChar === null) {
    return string;
  }

  const noDuplicates = removeDuplicatedChars(strArray, duplicatedChar);

  return removeDuplicates(noDuplicates.join(""));
}

function getFirstDuplicatedChar(array) {
  for (let i = 0; i < array.length; i++) {
    if (isDuplicated(array.slice(i + 1), array[i])) {
      return array[i];
    }
  }

  return null;
}

function isDuplicated(array, char) {
  return array.some((c) => c === char);
}

function removeDuplicatedChars(array, char) {
  return array.filter((c) => c !== char);
}
