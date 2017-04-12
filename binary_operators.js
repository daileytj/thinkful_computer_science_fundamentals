// & (AND) operator Exercises:
// Write a function that takes an integer value and checks to see if it is even or
// odd using the big-wise AND operator. Hint: Think about what the value of the
// least-significant bit will be for even and odd numbers.
//

function isEven(integer){
  console.log("integer: ", integer);
  // test if 'integer is even, using bitwise AND operator'
  if(){
    console.log('Even!');
  }
  else{
    console.log('Odd!')
  }
}

isEven(0);
isEven(1);
isEven(2);
isEven(563);
isEven(2356);

// Why would using bit-wise operations be potentially faster for checking whether a
// number is even or odds as opposed to using something like the modulo operator
// (for example randInt % 2)?

// | (OR) operator Exercise:
// Write a function that takes in two integer values and prints out the resultant
// value when you AND the two input values and then also when you OR the two input values.

// ^ (XOR) operator Exercise:
// Extend the previous function further by adding logic for the XOR operation when two
// integer values are input. Add a third parameter which denotes which type of operation
// to execute. Print out the resultant value for the associated operation type.

// ~ (NOT) operator Exercises:
// Write a function that takes in an integer value and prints out its complement value.
// What do you notice about the numbers which are output? What about if you give a
// large input value?

// Interview questions
// Write a function which sets the third bit of a number.
// Write a function which toggles the third bit of a number.
// Write a function which clears (sets to zero) the third bit of a number.
// Write a function which tells you whether the third bit of a number is set.
