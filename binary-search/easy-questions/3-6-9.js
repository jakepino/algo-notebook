// Given an integer n, return a list with each number from 1 to n, 
// except if it's a multiple of 3 or has a 3, 6, or 9 in the number, 
// it should be the string "clap".

// Note: return the number as a string.

// Constraints

// n ≤ 100,000
// Example 1
// Input
// n = 16
// Output
// ["1", "2", "clap", "4", "5", "clap", "7", "8", "clap", "10", "11", "clap", "clap", "14", "clap", "clap"]
// Explanation
// 3, 6, 9, 12, and 15 are replaced by "clap" since they are divisible by 3.
// 13 is replaced since it has a 3 in the number.
// 16 is replaced since it has a 6 in the number.
class Solution {
    solve(n) {
        let array = [1]
        for(let i = 1; i <= n; i++){
            array.push(i.toString())
            if(array[i].includes(3) || 
                array[i].includes(6) ||
                array[i].includes(9) ||
                array[i] % 3 === 0){
                    array[i] = "clap"
            }
        }
        array.shift()
        return array
    }
}