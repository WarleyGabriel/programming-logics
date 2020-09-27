// Complete the staircase function below.
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let whiteSpaces = n - i;

    let print = "";
    for (let j = 1; j <= whiteSpaces; j++) {
      print += " ";
    }
    for (let a = 1; a <= i; a++) {
      print += "#";
    }

    console.log(print);
  }
}

function staircaseNew(n) {
  for (let i = 1; i <= n; i++) {
    let whiteSpaces = n - i;
    let print = `${" ".repeat(whiteSpaces)}${"#".repeat(i)}`;

    console.log(print);
  }
}

staircase(6);

staircaseNew(6);
