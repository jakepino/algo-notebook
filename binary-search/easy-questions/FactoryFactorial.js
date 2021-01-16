// Given an integer n less than or equal to 10, compute its factorial.

// The factorial of a number n is defined as n * (n - 1) * (n - 2) * ... * 1.

// Constraints

// 0 ≤ n ≤ 10
// Example 1
// Input
// n = 5
// Output
// 120
// Explanation
// 5 * 4 * 3 * 2 * 1 = 120
class Solution {
    solve(n) {
     let sum = 1
     while (n > 0){
         sum *= n
         n --
     }
     return sum
    }
}