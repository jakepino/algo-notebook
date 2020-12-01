// Given a string, return the index of the first recurring character in it. 
// If there are no recurring characters, return -1.

// Example 1
// Input
// s = "abcda"
// Output
// 4
// Explanation
// The a at index 4 is the first recurring character.

// Example 2
// Input
// s = "abcde"
// Output
// -1
// Explanation
// No recurring characters in this string.

// Example 3
// Input
// s = "aaaaa"
// Output
// 1
// Explanation
// We want the first recurring character.
function solve(s) {
    let index = -1
    const dict = {}
    for(let i = 0; i < s.length; i++){
        if(dict[s[i]] === 1){
            index = i
            return index
        } else {
            dict[s[i]] = 1
        }
    }
    return index
}