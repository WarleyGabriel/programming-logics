bonAppetit([3, 10, 2, 9], 1, 12); // Print: 5
bonAppetit([3, 10, 2, 9], 1, 7); // Print: Bon Appetit

function bonAppetit(bill, k, b) {
  let sharedBill = 0;

  bill.forEach((item, index) => {
    if (index !== k) {
      sharedBill += item;
    }
  });

  const result = b - sharedBill / 2;
  if (!result) {
    console.log("Bon Appetit");
  } else {
    console.log(result);
  }
}
