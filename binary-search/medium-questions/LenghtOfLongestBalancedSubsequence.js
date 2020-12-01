// Given a string s containing brackets "(" and ")", 
// return the length of the longest subsequence of balanced brackets.

// Constraints

// n ≤ 100,000 where n is length of s.
// Example 1
// Input
// s = "())(()"
// Output
// 4
// Explanation
// We can take the subsequence "()()"

// Example 2
// Input
// s = "))(("
// Output
// 0
// Explanation
// We can't take any letters from s that's balanced, 
// so the longest balanced subsequence is "" (empty string).

// Example 3
// Input
// s = "))()))()"
// Output
// 4
// Explanation
// We can take the subsequence "()()". 
// Note that characters in the subsequence do not have to be contiguous.

// Example 4
// Input
// s = "((((())"
// Output
// 4
// Explanation
// We can make the subsequence (()).
function solve(s) {
    let counter = 0
    let long = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === ")" && counter > 0){
            long += 2
            counter--
        } else if(s[i] === "("){
            counter++
        }
       
    }
    return long
}