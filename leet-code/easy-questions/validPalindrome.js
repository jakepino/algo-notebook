// Given a string s, determine if it is a palindrome, 
// considering only alphanumeric characters and ignoring cases.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    
    let j = s.length-1
    let i = 0
    while(i < j ){
        if(s[i] !== s[j]){
            return false
        } else {
            i++
            j--
        }
    }
    return true
};