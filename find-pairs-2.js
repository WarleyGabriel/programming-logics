function findPairs(banks, cost) {
  let seen = [];

  for (let index = 0; index < banks.length; index++) {
    seen[index] = false;
  }

  for (let bank1Index = 0; bank1Index < banks.length; bank1Index++) {
    const findFor = cost - banks[bank1Index];
    if (seen[findFor]) {
      console.log("TRUE", banks[bank1Index], findFor, cost);
    }
    seen[bank1Index] = true;
  }
}

const banks = [0, 1, 2, 3, 4, 5, 6];
const cost = 6;

findPairs(banks, cost);
