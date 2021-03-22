// Given a string s, return whether it is a palindrome.

// Constraints

// n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "racecar"
// Output
// true
// Example 2
// Input
// s = "evilolive"
// Output
// true
// Example 3
// Input
// s = "palindrome"
// Output
// false
function solve(s) {
    for(let i = 0; i < s.length; i++){
        if(s[i] !== s[s.length - i -1]){
            return false
        }
    }
    return true
}