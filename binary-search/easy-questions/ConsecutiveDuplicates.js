// Given a string s, consisting of "X" and "Y"s, 
// delete the minimum number of characters such that there's no consecutive "X" and no consecutive "Y".

// Constraints

// n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "YYYXYXX"
// Output
// "YXYX"
// Explanation
// One solution is to delete the first two "Y"s and the last "X".
class Solution {
    solve(s) {
        let newArr = []
        for(let i = 0; i < s.length; i ++){
            if(s[i] !== s[i+1]){
                newArr.push(s[i])
            }
        }
        return newArr.join("")
    }
}