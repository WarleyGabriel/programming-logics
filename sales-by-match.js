const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function resolve(arr) {
  return arr.reduce((r, i) => {
    if (!r[i]) {
      r[i] = 1;
    } else {
      r[i]++;
    }
    return r;
  }, {});
}

function sockMerchant(arr) {
  const socksByCollor = resolve(arr);

  let pairs = 0;
  Object.keys(socksByCollor).forEach((k) => {
    const pair = Math.floor(socksByCollor[k] / 2);
    pairs += pair;
  });

  return pairs;
}

console.log(sockMerchant(arr));
