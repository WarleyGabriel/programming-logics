function FirstFactorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}

// keep this function call here
console.log(FirstFactorial(4));
