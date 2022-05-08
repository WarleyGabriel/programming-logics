// Given a word, remove all the repated letters and its ocurrences.
// Return the result.

// input ->  "Porto"
// output -> "Prt"

// input ->  "ooooo"
// output -> ""

function main(word) {
  const object = getCharCount(word);
  let result = word;

  Object.keys(object).forEach((key) => {
    if (object[key] > 1) {
      result = result.replace(new RegExp(key, "g"), "");
    }
  });

  console.log(`1: The word: ${word} creates: ${result}`);
}

function main2(word) {
  const object = getCharCount(word);

  const result = Object.keys(object).filter((key) => {
    return object[key] === 1;
  });

  console.log(`2: The word: ${word} creates: ${result.join("")}`);
}

function getCharCount(word) {
  return word.split("").reduce((result, l) => {
    if (result[l]) {
      result[l]++;
    } else {
      result[l] = 1;
    }
    return result;
  }, {});
}

main("Porto");

main("Porooooto");

main("ooooo");

main("oooooaaaa111b");

main2("Porto");

main2("Porooooto");

main2("ooooo");

main2("oooooaaaa111b");
