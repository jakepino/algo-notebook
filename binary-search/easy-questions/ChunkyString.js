// Given a string s and an integer n, split up s into n-sized pieces.

// For example, given:

// s = "abcdefg"
// n = 3
// Return ["abc", "def", "g"].

// If there are extra characters left over, they should be in its own piece.

// Example 1
// Input

// s = "abcdef"
// n = 2
// Output

// ["ab", "cd", "ef"]
function solve(s, n) {
    let sArr = s.split('')
    let strings = []
    for(let i = 0; i < s.length; i+=n){
        strings.push(sArr.slice(i, n+i).join(''))
        console.log(strings)
    }
    return strings
}