// In these drills, you'll practice determining the Big O complexity of algorithms.
// For each drill, we'll provide a code snippet with a function, and you'll work out
// the Big O complexity.
//
// You should work through the functions one by one, making comments and identifying
// the complexity of each part of the algorithm.


// Even or odd
// Determines whether a given value is even or odd
function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

// The function isEven has a constant runtime complexity
// Big O Notation - O(1)


// Are you here?
// Determines if values in two given arrays have a matching value
function areYouHere(arr1, arr2) {
    for (let i=0; i<arr1.length; i++) {
        const el1 = arr1[i];
        for (let j=0; j<arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// The function areYouHere has a polynomial runtime complexity
// Big O Notation - O(n^2)


// Doubler
function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// The function doubler has a linear runtime complexity
// Big O Notation - O(n)


// Naive Search
function naiveSearch(array, item) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// The function naiveSearch has a linear runtime complexity
// Big O Notation - O(n)


// Creating pairs:
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// The function createPairs has a polynomial runtime complexity
// Big O Notation - O(n^2)


// Computing fibonaccis

// A fibonacci sequence is one where every number is the sum of the previous two
// numbers in the sequence. For example the following is a fibonacci
// sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34. The first number always starts at 1
// (technically it is 0). Then the second number is 0+1 = 1, the third number is the
// sum of the first and the second numbers (1 + 2 = 3) and the sequence continues in
// a similar manner.
//
// Here, we have a function generateFib that uses iteration to generate a fibonacci
// sequence. Determine its run time complexity in big O.

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

// The function generateFib has a linear runtime complexity
// Big O Notation - O(n)


// An Efficient Search

// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above.
// Assume that the input array is always sorted.

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// The function efficientSearch has a logarithmic runtime complexity
// Big O Notation - O(nlogn)


// Random element
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// The function findRandomElement has a constant runtime complexity
// Big O Notation - O(1)


// Is it prime?
function isPrime(n) {
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    // otherwise, check if `n` is divisible by any integer
    // between 2 and n.
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

// The function isPrime has a linear runtime complexity
// Big O Notation - O(n)
