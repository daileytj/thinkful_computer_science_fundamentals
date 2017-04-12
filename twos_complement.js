// Exercise
// Implement a function that takes in an integer and prints out its two's complement
// value by following the algorithm described above. Hint: to invert the bits of a
// number you can use the "~" operator. For example ~25 will invert the bits of the integer 25.

function twos_complement(integer){
  var onesComplement = ~integer;
  console.log("integer: ", integer);
  console.log("onesComplement: ", onesComplement);
  var negative = onesComplement + 1;
  console.log("twos_complement: ", negative);
  negative;
}

// twos_complement(00000000);
// twos_complement(00000010);
// twos_complement(00000011);
twos_complement(0);
twos_complement(1);
twos_complement(2);
twos_complement(234);
