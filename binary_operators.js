/*---------- FORMATTING FUNCTIONS ----------*/
let formatOne = (int, result, name) => {
    return [name, ': ', int, ' (', padBin(int.toString(2)), ') => ', result, ' (', padBin(result.toString(2)), ')'].join('');
}

// FORMATS TWO-INTEGER OPERATORS
let formatTwo = (int1, int2, op, result, name) => {
    return [name, ': ', int1, ' (', padBin(int1.toString(2)), ') ', op, ' ', int2, ' (', padBin(int2.toString(2)), ') => ', result, ' (', padBin(result.toString(2)), ')'].join('');
}

// FORMATS RESULT FOR 'NOT' OPERATOR
let formatNot = (int, result) => {
    let bin = padBin(int.toString(2));
    return ['not: ', '~', int, ' (~', bin, ') => ', result, ' (', binInvert(bin), ')'].join('');
}

let formatCheck = (int, result, name) => {
    return [name, ': ', int, ' (', padBin(int.toString(2)), ') => ', result].join('');
}

// ADDS PADDING FOR 8-BIT NUMBERS
let padBin = (bin) => {
var numZeros = 8 - bin.length;
    for (var i = 0; i < (numZeros); i++) {
            bin = '0'+ bin;
    }
    return bin;
}

// INVERTS BITS
let binInvert = (bin) => {
    bin = bin.split('0').join('2');
    bin = bin.split('1').join('0');
    bin = bin.split('2').join('1');
    return bin;
}

// // & (AND) operator Exercises:
// // Write a function that takes an integer value and checks to see if it is even or
// // odd using the big-wise AND operator. Hint: Think about what the value of the
// // least-significant bit will be for even and odd numbers.
// //
//
// function isEven(integer){
//   console.log("integer: ", integer);
//   // test if 'integer is even, using bitwise AND operator'
//   if(){
//     console.log('Even!');
//   }
//   else{
//     console.log('Odd!')
//   }
// }
//
// //
// // isEven(0);
// // isEven(1);
// // isEven(2);
// // isEven(563);
// // isEven(2356);
console.log('---------------------------');
console.log('evenOrOdd tests');
console.log('---------------------------');
function evenOrOddAlt(int){

 var valueA = 1;
 var valueB = int;
 var binaryInt = int.toString(2);
 // console.log("binaryInt:", binaryInt);
  var aAndB = (valueA&valueB).toString(2);
 console.log('int: ', int);
 // console.log('valueA&valueB: ', (valueA&valueB));
 // console.log('aAndB: ', aAndB);
  var leastSigBit = aAndB.substring(aAndB.length - 1);
 // console.log("leastSigBit: ", leastSigBit);
 if (leastSigBit == 1) {
      console.log('odd');
     return 'odd';
 }
 console.log('even');
 return 'even';
}

evenOrOddAlt(0);
evenOrOddAlt(1);
evenOrOddAlt(5492);
evenOrOddAlt(33);

// Why would using bit-wise operations be potentially faster for checking whether a
// number is even or odds as opposed to using something like the modulo operator
// (for example randInt % 2)?
//
// bit-wise operations could potentially be faster for checking if a number is even or odd
// because we are working directly with the bit. By working with the bit, we are working
// directly with the data and there is no need for translation.
//

// | (OR) operator Exercise:
// Write a function that takes in two integer values and prints out the resultant
// value when you AND the two input values and then also when you OR the two input values.

console.log('---------------------------');
console.log('andOr tests');
console.log('---------------------------');

function andOr (int1, int2) {
    var and = (int1&int2);
    var or = (int1|int2);

    return [formatTwo(int1, int2, '&', and, 'AND'),
            formatTwo(int1, int2, '|', or, 'OR')]
}
console.log(andOr(2, 31));

// ^ (XOR) operator Exercise:
// Extend the previous function further by adding logic for the XOR operation when two
// integer values are input. Add a third parameter which denotes which type of operation
// to execute. Print out the resultant value for the associated operation type.

console.log('---------------------------');
console.log('XOR tests');
console.log('---------------------------');

function andOrXor (int1, int2, op){
    var operation = [int1, op, int2];
    var result = eval(operation.join(''));

    return formatTwo(int1, int2, op, result, 'XOR');
}
console.log(andOrXor(0, 2, '^'));
console.log(andOrXor(5, 10, '^'));
console.log(andOrXor(6, 20, '^'));

// ~ (NOT) operator Exercises:
// Write a function that takes in an integer value and prints out its complement value.

console.log('---------------------------');
console.log('NOT tests');
console.log('---------------------------');

function not(int) {
    var result = ~int;
    return formatNot(int, result)
}
console.log(not(0));
console.log(not(3));
console.log(not(5));
console.log(not(1000));

// What do you notice about the numbers which are output? What about if you give a
// large input value?
//
// The numbers output are -(n)-1
// When you give a large input value, the binary code extends beyond 8 bits to
// be able to represent that larger number.

console.log('---------------------------');
console.log('Interview Questions');
console.log('---------------------------');

// Interview questions

// Write a function which sets the third bit of a number.
console.log('---------------------------');
console.log('setThird tests');
console.log('---------------------------');
function setThird(num, bit) {
  var binary = padBin(num.toString(2));
  var result = parseInt(binary.substr(0, 5) + bit + binary.substr(6), 2);
  return formatOne(num, result, 'setThird');
}
console.log(setThird(15, 0));
console.log(setThird(4, 0));

// Write a function which toggles the third bit of a number.
console.log('---------------------------');
console.log('togThird tests');
console.log('---------------------------');
function togThird(num) {
  var binary = padBin(num.toString(2));
  var bit = binary.substring(5, 6);
  if (bit == 1) {
      bit = 0;
  } else {
      bit = 1;
  }
  var result = parseInt(binary.substr(0, 5) + bit + binary.substr(6), 2);
  return formatOne(num, result, 'togThird');
}
console.log(togThird(75));
console.log(togThird(4));

// Write a function which clears (sets to zero) the third bit of a number.
console.log('---------------------------');
console.log('clearThird tests');
console.log('---------------------------');
function clearThird(num) {
  var binary = padBin(num.toString(2));
  var bit = 0;
  var result = parseInt(binary.substr(0, 5) + bit + binary.substr(6), 2);
  return formatOne(num, result, 'clearThird')
}
console.log(clearThird(45));
console.log(clearThird(4));

// Write a function which tells you whether the third bit of a number is set.
console.log('---------------------------');
console.log('isThirdSet tests');
console.log('---------------------------');
function isThirdSet(num) {
  var binary = padBin(num.toString(2));
  var bit = binary.substring(5, 6);
  var result = false;
  if (bit == 1) {
      result = true;;
  }
  return formatCheck(num, result, 'isThirdSet');
}

console.log(isThirdSet(13));
console.log(isThirdSet(4));
console.log(isThirdSet(1));
