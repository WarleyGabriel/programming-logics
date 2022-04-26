function printNumber(n) {
  let line = "";
  const iterateN = n * n;

  for (let i = 1; i <= iterateN; i++) {
    shouldBreakLine = i % n === 0 && i != iterateN;
    line = line + " " + n + (shouldBreakLine ? "\n" : "");
  }

  console.log(line);
}

printNumber(10);
