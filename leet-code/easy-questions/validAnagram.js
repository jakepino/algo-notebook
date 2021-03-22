// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    
    let hash1 = {}
    let hash2 = {}
    
    for(let i = 0; i < s.length; i++){
        let a = s[i]
        let b = t[i]
        
        hash1[a] ? hash1[a]++ : hash1[a] = 1
        hash2[b] ? hash2[b]++ : hash2[b] = 1
    }
    
    for(ele in hash1){
        if(hash1[ele] !== hash2[ele]){
            return false
        }
    }
    
    return true
};