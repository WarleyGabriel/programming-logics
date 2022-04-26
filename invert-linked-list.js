const node = {
  head: {
    value: "a",
    next: {
      value: "b",
      next: {
        value: "c",
        next: {
          value: "d",
          next: null,
        },
      },
    },
  },
};

function invertLinkedList(node) {
  let curr = node.head;
  let previous = null;

  while (true) {
    let tmp_curr = curr.next;
    curr.next = previous;
    previous = curr;

    if (!tmp_curr) {
      break;
    }

    curr = tmp_curr;
  }
  return curr;
}

const result = invertLinkedList(node);
console.log(JSON.stringify(result));
