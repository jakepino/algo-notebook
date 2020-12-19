// Given a positve integer n, find the length of its Collatz sequence. 
// The Collatz sequence is generated sequentially where

// n = n / 2 if n is even
// n = 3 * n + 1 if n is odd
// And the sequence ends if n = 1
// Example 1
// Input
// n = 11
// Output
// 15
// Explanation
// The Collatz sequence is: [11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1] and its length is 15.
class Solution {
    solve(n) {
        // Write your code here
      let  collSeq = [n]
        while (n !== 1){
         if (n % 2 === 0){
            n = n/2 
            collSeq.push(n)
            }
         else {
            n = 3 * n + 1
            collSeq.push(n)
        }
      }
      return collSeq.length
    }
}
