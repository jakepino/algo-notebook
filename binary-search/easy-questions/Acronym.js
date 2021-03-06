// Given a string s representing a phrase, return its acronym. 
// Acronyms should be capitalized and should not include the word "and".

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "For your information"
// Output
// "FYI"
// Example 2
// Input
// s = "National Aeronautics and Space Administration"
// Output
// "NASA"
class Solution {
    solve(s) {
        let word = s.split(" ")
        let acr = []
        for(let i = 0; i < word.length; i++){
            word[i] !== "and" ?
                acr.push(word[i][0]) :
                null
        }
        return acr.join('').toUpperCase()
    }
}