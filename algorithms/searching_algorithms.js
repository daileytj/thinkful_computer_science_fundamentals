// Linear Search - Best Case O(1) - Average Case O(n)

function indexOf(array, value) {
    for (let i=0; i<array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
};

// Binary Search - Best Case O(1) - Average Case O(log(n))
// note: only works if the array is sorted

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

// Depth First Search - O(n) as each node needs to be searched
// Binary Tree Searching...

// class BinaryTree {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }

// dfs(values=[]) {
//         if (this.left) {
//             values = this.left.dfs(values);
//         }
//         values.push(this.value);
//
//         if (this.right) {
//             values = this.right.dfs(values);
//         }
//         return values;
//     }

// Breadth First Search - O(n) as each node needs to be visited and shifted

// bfs(values=[]) {
//         const queue = [this];
//
//         while (queue.length) {
//             const node = queue.shift();
//             values.push(node.value);
//
//             if (node.left) {
//                 queue.push(node.left);
//             }
//
//             if (node.right) {
//                 queue.push(node.right);
//             }
//         }
//
//         return values;
//     }

// Interview questions

// The share price for a company over a week's trading is as follows: [128, 97, 121,
// 123, 98, 97, 105]. If you had to buy shares in the company on one day, and sell
// the shares on one of the following days, write an algorithm to work out what the
// maximum profit you could make would be.
console.log("-------------------");
console.log("Share Price");
console.log("-------------------");

let sharePrice = (array, shares, difference) => {
  let lowest;
  let highest;
  difference = difference || 0;
  if (!array.length) {
    return `You made $${difference * shares}`;
  }
  if (array[0] > array[1]) {
    return sharePrice(array.slice(1, array.length), shares, difference)
  } else {
    lowest = array[0];

    let sortArr = array.slice();
    sortArr.sort(function(a, b){return a - b}).slice();
    highest = sortArr[sortArr.length - 1];

    let oldDiff = difference;
    difference = highest - lowest;

    if (difference > oldDiff) {
      return sharePrice(array.slice(1, array.length), shares, difference);
    } else {
      return sharePrice(array.slice(1, array.length), shares, oldDiff);
    }
  }
}

console.log(sharePrice([128, 97, 121, 123, 98, 20, 195], 10));


// Imagine that you wanted to find what the highest floor of a 100 story building you
// could drop an egg was, without the egg breaking. But you only have two eggs. Write
// an algorithm to work out which floors you should drop the eggs from to find this
// out in the most efficient way.
console.log("-------------------");
console.log("Egg Drop");
console.log("-------------------");

let eggDrop = (array, value, eggs, start, end, attempts) => {
  value = value || Math.floor((Math.random() * array.length) + 1)
  start = start || 0
  end = end || array.length
  eggs = eggs === undefined ? 2 : eggs
  attempts = attempts || 0

  attempts++

  if (eggs === 2) {
    let index = Math.floor((start + end) / 2)
    let floor = array[index]

    if (floor == value) {
      return `Floor: ${floor}; Attempts: ${attempts}`
    } else if (floor < value) {
      return eggDrop(array, value, eggs, index + 1, end, attempts)
    } else if (floor > value) {
      return eggDrop(array, value, eggs - 1, start, index - 1, attempts)
    }
  }

  if (start === value) {
    return `Floor: ${start}; Attempts: ${attempts}`
  } else if (start < value) {
    return eggDrop(array, value, eggs, start + 1, end, attempts)
  }

}

let testArray = [];
let createArr = (array) => {
  for (var i = 1; i < 101; i ++) {
    array.push(i);
  }
}

createArr(testArray);
console.log(eggDrop(testArray));

// Imagine you are looking for a book in a library with a Dewey Decimal index. How
// would you go about it? Can you express this process as a searching algorithm?
