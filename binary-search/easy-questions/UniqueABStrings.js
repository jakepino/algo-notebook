// You are given a string s of "a" and "b"s. "a"s can stay "a" or turn into "b", but "b"s can't change.

// Return the number of unique strings that can be made.

// Constraints

// 1 ≤ n ≤ 10,000 where n is the length of s
// Example 1
// Input
// s = "abba"
// Output
// 4
// Explanation
// We can make these strings:

// "abba"
// "abbb"
// "bbba"
// "bbbb"
class Solution {
    solve(s) {
        // Write your code here
        let counter = 0
        
        for(let i =0; i < s.length; i++){
            if (s[i] === "a"){
                counter +=1
            }
            
        }
        return 2**counter
    }
}