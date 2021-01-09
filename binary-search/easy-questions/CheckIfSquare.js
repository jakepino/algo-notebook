// Given an integer n, return whether n = k * k for some integer k.

// This should be done without using built-in square root function.

// Constrainnts

// 0 ≤ n < 2 ** 31
// Example 1
// Input
// n = 25
// Output
// true
// Explanation
class Solution {
    solve(n) {
        let k = 0
        while(k*k <= n){
            if(k*k === n){
                return true
            }else {
                k += 1
            }
        }
        return false
    }
}
let newSolution = new Solution
console.log(newSolution.solve(25))