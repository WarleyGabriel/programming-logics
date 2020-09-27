function plusMinus(arr) {
  let negative = 0;
  let positive = 0;
  let zero = 0;
  arr.forEach((n) => {
    if (n > 0) {
      positive += 1;
    } else if (n < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  });

  const length = arr.length;
  console.log(positive / length);
  console.log(negative / length);
  console.log(zero / length);
}

plusMinus([1, 2, 3, -1, -2, -3, 0, 0]);
