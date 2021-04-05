// Given a list of integers nums and an integer k, 
// return true if you can remove exactly one element from the list to make the average equal to exactly k.

// Constraints

// 2 ≤ n ≤ 1,000 where n is length of nums
// nums[i], k ≤ 1,000,000
// Example 1
// Input
// nums = [1, 2, 3, 10]
// k = 2
// Output
// true
// Explanation
// We can take 10 out to reach an average of 2 since (1 + 2 + 3) / 3 = 2

// Example 2
// Input
// nums = [1, 3]
// k = 2
// Output
// false
// Explanation
// If we remove 1, we get an average of 3 and if we remove 3, we get an average of 1.
class Solution {
    solve(nums, k) {
        let reduced = nums.reduce((acc, x) => acc + x)
        for(let i = 0; i < nums.length; i++){
            if((reduced - nums[i])/(nums.length - 1) === k){
                return true
            }
        }
        return false
    }
}