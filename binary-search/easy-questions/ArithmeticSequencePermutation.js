// Given a list of integers nums, 
// return whether you can rearrange the order of nums 
// such that the difference between every consecutive two numbers is the same.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [7, 1, 5, 3]
// Output
// true
// Explanation
// If we rearrange nums to [1, 3, 5, 7], 
// then the difference between every two consecutive numbers is 2.

// Example 2
// Input
// nums = [1, 5, 1, 5, 1, 5]
// Output
// false
// Explanation
// The difference between every consecutive two numbers alternates between 4 and -4
class Solution {
    solve(nums) {
        if(nums.length === 2) {
            return true
        }
        
        nums.sort((a, b) => a-b)
        
        let diff = nums[1] - nums[0]

        for(let i = 1; i < nums.length; i++){
            if(diff != (nums[i]-nums[i-1])){
                return false
            }
        }
        
        return true
    }
}