// Given a string, find the first non-repeating character in it and return its index. 
// If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

// Note: You may assume the string contains only lowercase English letters.

//solution 1
var firstUniqChar = function(s) {
    let hash = {}
    
    for(let i = 0; i < s.length; i++){
        hash[s[i]] ? hash[s[i]]++ : hash[s[i]] = 1
    }
    
    let keys = Object.keys(hash)
    let values = Object.values(hash)
    console.log(values)
    for(let i = 0; i < values.length; i++){
        if(values[i] === 1){
            let key = keys[i]
            return s.indexOf(key)
        }
    }
    
    return -1
};