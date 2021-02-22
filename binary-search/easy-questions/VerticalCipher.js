// Given a string s and an integer k, 
// rearrange s into k rows so that s can be read vertically (top-down, left to right).

// Constraints

// n ≤ 10,000 where n is the length of s
// k ≤ 1,000
// Example 1
// Input
// s = "abcdefghi"
// k = 5
// Output
// ["af", "bg", "ch", "di", "e"]
// Explanation
// This reads vertically as:

// ["af",
//  "bg",
//  "ch",
//  "di",
//  "e"]
class Solution {
    solve(s, k) {
       let arr = []
       for (let i = 0; i < s.length; i++) {
           if (i < k) arr.push(s[i])
           else arr[i % k] += s[i]
          
       }
       return arr
   }
}