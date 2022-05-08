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

function invertOnBinaryTree(tree) {
  if (tree) {
    let left = tree.left;
    let right = tree.right;

    if (right) {
      tree.left = right;
    }
    if (left) {
      tree.right = left;
    }

    invertOnBinaryTree(tree.left);
    invertOnBinaryTree(tree.right);
  }

  return tree;
}

const result = invertOnBinaryTree(tree);
console.log(result);
