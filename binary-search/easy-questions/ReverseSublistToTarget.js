// Given two lists of integers nums, and target, 
// consider an operation where you take some sublist in nums and reverse it. 
// Return whether it's possible to turn nums into target, given you can make any number of operations.

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of nums
// 0 ≤ m ≤ 100,000 where m is the length of target
// Example 1
// Input
// nums = [1, 2, 3, 8, 9]
// target = [3, 2, 1, 9, 8]
// Output
// true
// Explanation
// We can reverse [1, 2, 3] and [8, 9]

// Example 2
// Input
// nums = [10, 2, 3, 8, 9]
// target = [3, 2, 1, 9, 8]
// Output
// false
class Solution {
    solve(nums, target) {
        if (nums.length !== target.length) return false
        let hash = {}
        for(let i = 0; i < nums.length; i++){
            hash[nums[i]] ? hash[nums[i]] += 1 : hash[nums[i]] = 1
       }
        for(let i = 0; i < target.length; i++){
            if(hash[target[i]]){
                hash[target[i]]--
            } else return false
        }
       return true
    }
}