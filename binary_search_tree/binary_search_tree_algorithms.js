// Binary Search Tree class

class BinarySearchTree {
    constructor(key=null, value=null, parent=null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    get(key) {
        if (this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.get(key);
        }
        else if (key > this.key && this.right) {
            return this.right.get(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
  }


// End Binary Search Tree Class

// Create Trees
let tree1 = new BinarySearchTree(10, 'ten')
tree1.insert(5, 'five')
tree1.insert(15, 'fifteen')
tree1.insert(2, 'two')
tree1.insert(8, 'eight')
tree1.insert(12, 'twelve')
tree1.insert(18, 'eighteen')

let tree2 = {
  key: 10,
  value: 'ten',
  left: {
    key: 5,
    value: 'five',
    left: {
      key: 6,
      value: 'two',
      left: null,
      right: null
    },
     right: {
      key: 8,
      value: 'eight',
      left: null,
      right: null
    }
  },
  right: {
    key: 15,
    value: 'fifteen',
    left: {
      key: 12,
      value: 'twelve',
      left: null,
      right: null
    },
    right: {
      key: 18,
      value: 'eighteen',
      left: {
        key: 17,
        left: {
          key: 16,
          left: {
            key: 15,
            left: null,
            right: null
          },
          right: null
        },
        right: null
      },
      right: null
    }
  }
}

// Interview Questions

// Write an algorithm to find the height of a binary search tree
let height = (tree) => {
  let left = tree.left
  let right = tree.right
  if (left && right) {
    return Math.max(height(left), height(right)) + 1
  }
  if (left) {
    return height(left) + 1
  }
  if (right) {
    return height(right) + 1
  }
  return 1
}
// console.log(height(tree1), '<--tree1');
// console.log(height(tree2), '<--tree2');

// Write an algorithm to check whether an arbitrary binary tree is a binary search
// tree, assuming the tree does not contain duplicates
let isBinaryTree = (tree) => {
  let key = tree.key
  let left = tree.left
  let right = tree.right
  if (left) {
    if (left.key > key) {
      return false
    }
    if (!isBinaryTree(left)) {
        return false
    }
  }
  if (right) {
    if (right.key < key) {
      return false
    }
    if (!isBinaryTree(right)) {
      return false
    }
  }
return true
}
// console.log(isBinaryTree(tree1), '<--isBinaryTree(tree1)');
// console.log(isBinaryTree(tree2), '<--isBinaryTree(tree2)');


// Write an algorithm to find the third largest node in a binary search tree
let thirdLargest = (tree) => {
  let right = tree.right
  let left = tree.left
  if (right) {
    thirdLargest(right)
  }
  // parent
  if (tree.parent.key) {
    if (!left || left.key < tree.parent.key) {
      if (tree.parent.left) {
        if (tree.parent.left.right) {
          thirdLargest(tree.parent.left.right)
        }
        return tree.parent.left.key
      }
      return tree.parent.parent.key
    }
  }
  else {
    thirdLargest(left)
  }
  return tree.key
}
// console.log(thirdLargest(tree1), '<-- thirdLargest(tree1)')

function print_tree(tree, depth) {
    if (!depth) {
        console.log("" + tree.key);
        depth = 0;
    }
    depth += 1;
    if (tree.left) {
        console.log(" ".repeat(depth) + "<" + tree.left.key);
        print_tree(tree.left, depth);
    }
    if (tree.right) {
        console.log(" ".repeat(depth) + ">" + tree.right.key);
        print_tree(tree.right, depth);
    }
}
