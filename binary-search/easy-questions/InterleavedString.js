// Given two strings s0 and s1, return the two strings interleaved, 
// starting with s0. If there are leftover characters in a string they should be added to the end.

// Constraints

// n ≤ 100,000 where n is the length of s0
// m ≤ 100,000 where n is the length of s1
// Example 1
// Input
// s0 = "abc"
// s1 = "xyz"
// Output
// "axbycz"
// Example 2
// Input
// s0 = "abc"
// s1 = "x"
// Output
// "axbc"

class Solution {
    solve(s0, s1) {
        let length = Math.max(s0.length, s1.length)
        let newString = ''
        for(let i = 0; i < length; i++){
            s0[i] ? newString += s0[i] : null
            s1[i] ? newString += s1[i] : null
            
        }
        return newString
    }
}