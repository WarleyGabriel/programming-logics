(function birthdayCakeCandles(candles) {
  const obj = candles.reduce((result, n) => {
    if (result[n]) {
      result[n]++;
    } else {
      result[n] = 1;
    }
    return result;
  }, {});

  return Math.max(...Object.values(obj));
})([3, 2, 1, 3]);
