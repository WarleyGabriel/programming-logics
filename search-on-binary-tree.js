//          1
//         /  \
//        2     3
//       / \   / \
//      4   5  6  7
//     / \    /
//    8   9  10

const tree = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4, left: { value: 8 }, right: { value: 9 } },
    right: { value: 5 },
  },
  right: {
    value: 3,
    left: { value: 6, left: { value: 10 } },
    right: { value: 7 },
  },
};

function searchOnBinaryTree(tree, n) {
  if (tree) {
    if (tree.left && tree.left.value === n) {
      return tree.left.value;
    }

    if (tree.right && tree.right.value === n) {
      return tree.right.value;
    }

    const resultLeft = searchOnBinaryTree(tree.left, n);
    const resultRight = searchOnBinaryTree(tree.right, n);

    if (resultLeft) {
      return tree.left;
    }
    if (resultRight) {
      return tree.right;
    }
  }

  return undefined;
}

const result = searchOnBinaryTree(tree, 10);
console.log(result);
