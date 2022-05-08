const numbers = [1, 2, 3, 4, 6, 15, 16, 17, 30, 40];

(function main(numbers) {
  for (n of numbers) {
    console.log(`The number ${n} : ${resolve(n)}`);
  }
})(numbers);

function resolve(number) {
  let result = "";

  if (number % 3 === 0) {
    result += "Fizz";
  }
  if (number % 5 === 0) {
    result += "Buzz";
  }
  return result;
}
