// // Given three numbers, a, b, and c, return their product,
// // but if any two numbers are the same, they do not count.

// Example 1
// Input
// a = 2
// b = 3
// c = 4
// Output
// 24
// Explanation
// All three numbers are unique so their product is 2 * 3 * 4 = 24

// Example 2
// Input
// a = 3
// b = 3
// c = 5
// Output
// 5
// Explanation
// There's two 3s so the product is 5

// Example 3
// Input
// a = 3
// b = 3
// c = 3
// Output
// 1
// Explanation
// All three numbers are the same, so they don't count toward the product.
class Solution {
    solve(a, b, c) {
        let na = a
        let nb = b
        let nc = c
        if(a === b){
            na = 1
            nb = 1
        } if(b === c){
            nb = 1
            nc = 1
        } if(a === c){
            na = 1
            nc = 1
        }
        
        return na*nb*nc
    }
}