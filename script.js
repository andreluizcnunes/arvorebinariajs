let arvore = {
  left: {
    value: 5,

    left: {
      value: 1
    },

    right: {
      value: 6
    }
  },

  right: {
    value: 19,

    left: {
      value: 17
    },

    right: {
      value: 21
    }
  },

  value: 10
};

function inOrder(tree){
  tree.left && inOrder(tree.left);

  console.log(tree.value);

  tree.right && inOrder(tree.right);
};

console.log('inOrder');

inOrder(arvore);