// Given two strings s and p, return whether s follows the pattern in p. 
// That is, return whether each character in p can map to a non-empty word such that it maps to s.

// Constraints

// n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "hello world world world hello"
// p = "abbba"
// Output
// true
// Explanation
// We can map "a" = "hello" and "b" = "world"
var wordPattern1 = function(pattern, s) {
    const dict = {}
    const sArr = s.split(" ")
    if(sArr.length !== pattern.length) return false
    
    for(let i = 0; i < pattern.length; i++){
        if(dict[pattern[i]]){
            if(dict[pattern[i]] !== sArr[i]){
                return false
            }
        } else if (Object.values(dict).includes(sArr[i]) && !Object.keys(dict).includes(pattern[i])){
            return false
        } else {
            dict[pattern[i]] = sArr[i]
        }
        
    }
    return true
};

// solution 2

var wordPattern2 = function(pattern, s) {
    const dict = {}
    const sArr = s.split(" ")
    if(sArr.length !== pattern.length || new Set(pattern).size !== new Set(sArr).size) return false
    
    for(let i in pattern){
        if(!dict[pattern[i]]){
            dict[pattern[i]] = sArr[i]
        } else {
            if(dict[pattern[i]]!== sArr[i]){
                return false
            }
        }
    }

    return true
};