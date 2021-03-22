function divisibleSumPairs(n, k, ar) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let test = ar[i] + ar[j];
      if (i < j && test % k === 0) {
        result += 1;
      }
    }
  }

  console.log(result);
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
