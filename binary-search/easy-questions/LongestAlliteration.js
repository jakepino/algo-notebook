// Given a list of lowercase alphabet strings words, 
// return the length of the longest contiguous sublist 
// where all words share the same first letter.

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of words
// Example 1
// Input
// words = ["she", "sells", "seashells", "he", "sells", "clams"]
// Output
// 3
// Explanation
// ["she", "sells", "seashells"] all share the first letter s.
class Solution {
    solve(words) {
            if(words.length < 1) return 0
            let counter = 1
            let max = 1
            for(let i = 0; i < words.length-1; i++){
                if(words[i][0] === words[i+1][0]){
                    counter++
                } else {
                    if(counter > max){
                        max = counter
                    }
                    counter = 1
                }
            }
            return Math.max(max, counter)
    }   
}

