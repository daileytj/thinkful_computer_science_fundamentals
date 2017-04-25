// Linear Search

function indexOf(array, value) {
    for (let i=0; i<array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
};

// Binary Search

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

// Interview questions

// The share price for a company over a week's trading is as follows: [128, 97, 121,
// 123, 98, 97, 105]. If you had to buy shares in the company on one day, and sell
// the shares on one of the following days, write an algorithm to work out what the
// maximum profit you could make would be.


// Imagine that you wanted to find what the highest floor of a 100 story building you
// could drop an egg was, without the egg breaking. But you only have two eggs. Write
// an algorithm to work out which floors you should drop the eggs from to find this
// out in the most efficient way.


// Imagine you are looking for a book in a library with a Dewey Decimal index. How
// would you go about it? Can you express this process as a searching algorithm?
