// Given a string s containing balanced parentheses "(" and ")", 
// split them into the maximum number of balanced groups.

// Constraints

// n ≤ 100,000 where n is length of s.
// Example 1
// Input
// s = "()()(()())"
// Output
// ["()", "()", "(()())"]

function solve(s) {
    let array = []
    let temp = ''
    let counter = 0
    
    for(let i = 0; i < s.length; i++){
       if(s[i] === "("){
           counter++
       }else{
           counter--
       }
       temp += s[i]
       if(counter === 0){
           array.push(temp)
           temp = ''
       }
    }
    return array
}