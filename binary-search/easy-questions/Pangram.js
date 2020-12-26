// Given a string s, representing a sentence, return whether every letter (case-insensitive) of the alphabet is used at least once.

// Example 1
// Input
// s = "A quick brown fox jumps over the lazy dog"
// Output
// true
// Example 2
// Input
// s = "The jay, pig, fox, tiger and my wolves quack!"
// Output
// false
// Explanation
// This sentence is missing a "z"
class Solution {
    solve(s) {
    
        let map = {}
        let alphabet = "abcdefghijklmnopqrstuvwxyz"
    
        for (let letter of s.toLowerCase()) {
            if (alphabet.includes(letter)) {
                map[letter] += 1
            }
    
        }
        if (Object.keys(map).length === 26) {
            return true
        } else {
            return false
        }
    }
    }