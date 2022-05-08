function findPairs(banks, cost) {
  for (let bank1Index = 0; bank1Index < banks.length; bank1Index++) {
    for (let bank2index = 0; bank2index < banks.length; bank2index++) {
      if (
        (banks[bank1Index] + banks[bank2index] === cost) &
        (bank1Index !== bank2index)
      ) {
        console.log("TRUE", banks[bank1Index], banks[bank2index], cost);
      }
    }
  }
}

const banks = [1, 2, 3];
const cost = 4;

findPairs(banks, cost);
