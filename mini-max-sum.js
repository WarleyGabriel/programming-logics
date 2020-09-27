(function miniMaxSum(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let total = 0;

  arr.forEach((n) => {
    total += n;
  });

  console.log(`${total - max} ${total - min}`);
})([1, 2, 3, 4, 5]);
