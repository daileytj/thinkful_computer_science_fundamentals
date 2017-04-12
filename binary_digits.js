// Binary Interview Questions

// What is 2^5 in binary?
// 0 0 0 1 0 0 0 0     = 16

// What is (2^5) - 1 in binary?
// 0 0 0 0 1 1 1 1     = 15

// What is the general rule for binary numbers that are of the form 2^n or 2^n - 1?
//
// for 2^n
// index[n] == 1, while all other indexes == 0
//
// for 2^n - 1
// index >= n == 0, while index < n == 1
