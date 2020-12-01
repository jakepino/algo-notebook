Given a non-negative integer n, find a number r such that r * r = n and round down to the nearest integer.

// Can you implement this without using the built-in square root?

// Constraints
// 0 ≤ n < 2 ** 31

// Example 1
// Input
// n = 9
// Output
// 3
// Explanation
// 3 is the square root of 9.

// Example 2
// Input
// n = 26
// Output
// 5
// Explanation
// ~5.09901951359 is the square root of 26 and rounding down gives us 5

function solve(n) {
    let i = 0
    while((i+1) ** 2 <= n){
       i++
    }
    return i
}