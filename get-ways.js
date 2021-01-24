function getWays(s, d, m) {
  let ways = 0;

  s.forEach((e, index) => {
    let result = e;

    for (let i = index + 1; i < m + index; i++) {
      result += s[i];
    }

    if (result === d) {
      ways += 1;
    }
  });

  return ways;
}

console.log(getWays([1, 2, 1, 3, 2], 3, 2));

console.log(getWays([1, 1, 1, 1, 1, 1], 3, 2));

console.log(getWays([4], 4, 1));

console.log(
  getWays([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)
);
