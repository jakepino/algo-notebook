// The Fibonacci sequence goes like this: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// The next number can be found by adding up the two numbers before it, and the first two numbers are always 1.

// Write a function that takes an integer n and returns the nth Fibonacci number in the sequence.

// Constraints

// n ≤ 30
// Example 1
// Input
// n = 1
// Output
// 1
// Explanation
// This is the base case and the first fibonacci number is defined as 1.

// Example 2
// Input
// n = 6
// Output
// 8
// Explanation
// Since 8 is the 6th fibonacci number: 1, 1, 2, 3, 5, 8.

// Example 3
// Input
// n = 7
// Output
// 13
// Explanation
// Since 13 is the seventh number: 1, 1, 2, 3, 5, 8, 13
class Solution {
    solve(n) {
        const fib = [1,1]
        if( n > 1){
            for(let i = 2; i <= n; i++){
                fib.push(fib[i-1] + fib[i-2])
        }
        return fib[n-1]
      }
      else {return 1}
    }
}