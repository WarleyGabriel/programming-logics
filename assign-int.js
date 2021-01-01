let first = 1;
let second = 2;

first = first + second;
second = first - second;
first = first - second;

console.log(first, second);

//----//

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);
