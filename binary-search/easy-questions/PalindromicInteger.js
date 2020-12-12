// Given a non-negative integer num, return whether it is a palindrome.

// Bonus: Can you solve it without using strings?

// Constraints

// num < 2 ** 31
// Example 1
// Input
// num = 121
// Output
// true
// Example 2
// Input
// num = 20200202
// Output
// true
// Example 3
// Input
// num = 43
// Output
// false
class Solution {
    solve(num) {
        // 121
        let reverse = 0
        let original = num
            while (num > 0){
                reverse = (reverse * 10) + (num % 10)
                num = Math.floor(num / 10)
                }
        return original === reverse ? true : false
    }
}