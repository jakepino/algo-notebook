// Given a list of integers nums, find the largest product of two distinct elements.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [5, 1, 7]
// Output
// 35
// Explanation
// 35 is the largest product that can be made from 5 * 7

// Example 2
// Input
// nums = [7, 1, 7]
// Output
// 49
// Explanation
// 49 is the largest product that can be made from 7 * 7. The values can be the same but they must be separate elements.

// Example 3
// Input
// nums = [-5, 1, -7]
// Output
// 35
// Explanation
// 35 is the largest product that can be made from -5 * -7.
class Solution {
    solve(nums) {
        let n = nums.length
        let max = 0
        let sortedArray = nums.sort((a, b) => a - b)
        
        max = Math.max(nums[0] * nums[1], nums[n-1] * nums[n-2])
        return max
    }
}
