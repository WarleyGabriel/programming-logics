let cache = { 0: 0, 1: 1, 2: 1 };

function getFibonacciNumberWithCache(n) {
  if (cache.hasOwnProperty(n)) {
    return cache[n];
  }

  const result =
    getFibonacciNumberWithCache(n - 1) + getFibonacciNumberWithCache(n - 2);

  cache = { ...cache, [n]: result };
  return result;
}

console.time("FibonacciNumberWithCache");
console.log(getFibonacciNumberWithCache(45));
console.timeEnd("FibonacciNumberWithCache");
