// Write code to remove duplicates from an unsorted linked list

// input
const linkedList = {
  value: 2,
  next: {
    value: 1,
    next: {
      value: 3,
      next: {
        value: 1,
        next: {
          value: 4,
          next: {
            value: 5,
            next: {
              value: 1,
              next: null,
            },
          },
        },
      },
    },
  },
};

// create a new object with the key of the LinkedList and how many times this key is present
function removeDuplicates(linkedList) {
  let duplicates = [];
  let current = linkedList;
  let hashMap = {};

  while (current) {
    if (!hashMap[current.value]) {
      hashMap[current.value] = 1;
    } else {
      duplicates.push(current.value);
    }
    current = current.next;
  }

  let previousList;
  current = linkedList;
  while (current) {
    if (duplicates.indexOf(current.value) !== -1) {
      hashMap[current.value] = 1;
      let restOfTheList = current.next;
      previousList.next = restOfTheList;
    }

    previousList = current;
    current = current.next;
  }

  return JSON.stringify(linkedList);
}

console.log(removeDuplicates(linkedList));
