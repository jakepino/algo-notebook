// Given an integer n, 
// return whether it is equal to the sum of its own digits raised to the power of the number of digits.

// Example 1
// Input
// n = 153
// Output
// true
// Explanation
// 153 = 1 ** 3 + 5 ** 3 + 3 ** 3

class Solution {
    solve(n) {
        let arr = Array.from(n.toString())
        let total = 0

        for(let i = 0; i < arr.length; i++){
            let x = arr[i] ** arr.length
            total += x
        }
        
        return total === n
    }
}
