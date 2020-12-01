// Given an integer n, return the nth (0-indexed) row of Pascal's triangle.

// Pascal's triangle can be created as follows: 
// In the top row, there is an array of 1. 
// Subsequent row is created by adding the number above and to the left with the number above and to the right, 
// treating empty elements as 0.

// Example 1
// Input

// n = 3
// Output

// [1, 3, 3, 1]
// Explanation

// This is row 3 in

// [1]
// [1, 1]
// [1, 2, 1]
// [1, 3, 3, 1]
function solve(n) {
    let triangle = [1]
    
    for(let i = 1; i <= n; i++){
        triangle[i] = (triangle[i-1] * (n - i + 1) / i)
    }
    
    return triangle
}
