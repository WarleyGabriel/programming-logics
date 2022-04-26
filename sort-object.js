const arr = [
  { priority: 5, name: "promo 5" },
  { priority: 3, name: "promo 3" },
  { priority: 4, name: "promo 4" },
  { priority: 2, name: "promo 2" },
  { priority: 0, name: "promo 0" },
  { priority: 0, name: "promo 00" },
  { priority: 1, name: "promo 1" },
];

function sort(arr) {
  return arr.sort((a, b) => {
    if (a.priority > b.priority) {
      return 1;
    } else if (a.priority === b.priority) {
      return 0;
    }
    return -1;
  });
}

const result = sort(arr);

console.log(result);
