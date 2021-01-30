// Given two strings s0 and s1, return whether they are anagrams of each other.

// Constraints

// n ≤ 100,000 where n is the length of s0
// m ≤ 100,000 where m is the length of s1
// Example 1
// Input
// s0 = "listen"
// s1 = "silent"
// Output
// true
// Example 2
// Input
// s0 = "bedroom"
// s1 = "bathroom"
// Output
// false
class Solution {
    solve(s0, s1) {
        let sortedStr1 = s0.split('').sort().join('')
        let sortedStr2 = s1.split('').sort().join('')
        
        return sortedStr1 === sortedStr2
    }
}