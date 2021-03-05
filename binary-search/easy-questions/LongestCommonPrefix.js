// Given a list of lowercase alphabet strings words, return the longest common prefix.

// Example 1
// Input
// words = ["anthony", "ant", "antigravity"]
// Output
// "ant"
// Explanation
// "ant" is the longest common prefix between the three strings.
class Solution {
    solve(words) {
        let string = ""
        for(let i = 0; i < words[0].length; i++){
            let letter = words[0][i]
            for(let j = 0; j < words.length; j++){
                if(words[j][i] !== letter){
                    return string
                }
            }
                string += letter
        }
        
        return string  
    }
}