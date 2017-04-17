// Imagine you have an array of numbers. Write an algorithm to remove all numbers less
// than five from the array.
// note: You shouldn't use the .filter method here; try to write the algorithm from scratch.
console.log('------------------------');
console.log('removeLessThanFive tests');
console.log('------------------------');

let removeLessThanFive = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > 5) {
            newArr.push(arr[i]);
        }
    }
    console.log(`original arr: ${arr}`);
    console.log(`newArr: ${newArr}`);
    return newArr;
}

//removeLessThanFive has a O(n) run time complexity
removeLessThanFive([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]);
removeLessThanFive([
    -4,
    -1,
    1,
    3,
    7,
    9,
    11,
    15
]);

// Imagine you have two arrays which have already been sorted. Write an algorithm to
// merge the two arrays into a single array, which should also be sorted. For example,
// if your input arrays were [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10], your output
// array should be [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11].
console.log('---------------------------');
console.log('mergeAndSortUsingSort tests');
console.log('---------------------------');

let mergeAndSortUsingSort = (arr1, arr2) => {
    let newArr = arr1.concat(arr2);
    newArr.sort((a, b) => {
        return a - b;
    });
    console.log(`arr1 (${arr1}) + arr2 (${arr2}) = newArr (${newArr})`);
}

// mergeAndSortUsingSort has a 0(n) run time complexity
mergeAndSortUsingSort([
    1, 2, 3, 4, 5
], [2, 4, 6, 7, 10]);
mergeAndSortUsingSort([
    1,
    1,
    4,
    4,
    6,
    9
], [1, 2, 3, 4, 5]);

// Given an array of numbers, write an algorithm to find out the products of every number,
// except the one at that index. For example, if the input was [1, 3, 9, 4], the output
// should be [108, 36, 12, 27] (i.e. [3*9*4, 1*9*4, 1*3*4, 1*3*9]).
console.log('---------------------------');
console.log('getProductLessIndex tests');
console.log('---------------------------');

let getProductLessIndex = arr => {
    newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        let skippedIndex = arr[i];
        let arrToMultiply = [];
        for (let j = 0; j < arr.length; j += 1) {
            if (arr[j] != skippedIndex) {
                arrToMultiply.push(arr[j]);
            }
        }
        let product = 1;
        for (let k = 0; k < arrToMultiply.length; k += 1) {
            product *= arrToMultiply[k];
        }
        newArr.push(product);
    }
    console.log(`arr in = ${arr}, arrOut = ${newArr}`);
    return newArr;
}
getProductLessIndex([1,2,3]);
