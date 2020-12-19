// You are given a string s where each character is "L" meaning you moved one unit left, 
// "R" meaning you moved one unit right, or "?" meaning either "L" or "R".

// Given you are at position 0, 
// return the maximum possible distance you could be from 0 by replacing "?" with "L" or "R".

// Example 1
// Input
// s = "LLRRR??"
// Output
// 3
// Explanation
// We can replace the two "?" with "R" to move 5 units right and 2 units left, for a total distance of 3 units from 0.
class Solution {
    solve(s) {
        let location = 0
        let unknowns = 0
        for (let i = 0; i < s.length; i++) {
            if (s[i] === 'R') {
                location++
            } else if (s[i] === 'L') {
                location--
            } else {
                unknowns++
            }
        }
        return Math.abs(location) + unknowns
    }
}