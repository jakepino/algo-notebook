// Given a string s, return its run-length encoding. 
// You can assume the string to be encoded have no digits and consists solely of alphabetic characters.

// Constraints

// n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "aaaabbbccdaa"
// Output
// "4a3b2c1d2a"
// Example 2
// Input
// s = "abcde"
// Output
// "1a1b1c1d1e"
// Example 3
// Input
// s = "aabba"
// Output
// "2a2b1a"
// Example 4
// Input
// s = "aaaaaaaaaa"
// Output
// "10a"
class Solution {
    solve(s) {
        let newS = ""
        let counter = 1
        for(let i = 0; i < s.length; i++){
            let temp = s[i]
            if(s[i+1] === temp){
                counter++
            } else if(s[i+1] !== temp){
                newS += `${counter}` + `${s[i]}`
                counter = 1
            }
        }
        return newS
    }
}