function perfectSubstring(s, k) {
  const arr = s.split("");
  console.log("array length: ", arr.length);

  let perfectString = 0;

  if (arr.every((val, i, arr) => val === arr[0])) {
    console.log("qty of perfect string:", arr.length);

    return arr.length;
  }

  for (let i = 0; i < arr.length; i++) {
    const cache = {};

    for (let index = i; index < arr.length; index++) {
      if (cache[arr[index]]) {
        cache[arr[index]] += 1;
      } else {
        cache[arr[index]] = 1;
      }

      if (checkString(cache, k)) {
        perfectString += 1;
      }
    }
  }
  console.log("qty of perfect string:", perfectString);
}

function checkString(obj, k) {
  return Object.keys(obj).every((e) => obj[e] === k);
}

console.time("1:timer");
perfectSubstring("1020122", 2);
console.timeEnd("1:timer");
console.log("\n");

console.time("2:timer");
perfectSubstring("1102021222", 2);
console.timeEnd("2:timer");
console.log("\n");

console.time("3:timer");
perfectSubstring(
  "000000000000000000000000000000000000000000000000000000000000000000",
  2
);
console.timeEnd("3:timer");
console.log("\n");
