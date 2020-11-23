function getFibonacciNumberRecursively(n) {
  if (n == 0) return 0;
  if (n == 1 || n == 2) return 1;
  return (
    getFibonacciNumberRecursively(n - 1) + getFibonacciNumberRecursively(n - 2)
  );
}

console.time("FibonacciNumberRecursively");
console.log(getFibonacciNumberRecursively(45));
console.timeEnd("FibonacciNumberRecursively");
