const arr = [2, 5, 3];

const result = arr.map((item1, index1) => {
  let product = 1;

  arr.forEach((item2, index2) => {
    if (index1 !== index2) {
      product = product * item2;
    }
  });

  return product;
});

console.log(result);

// You have an array of numbers like this:

// [2, 5, 3]

// Write a function that outputs an array where each element
// in the array is the product of all of the other numbers in
// the array (except for the one at the specific index).

// So this would give:

// [15, 6, 10]
