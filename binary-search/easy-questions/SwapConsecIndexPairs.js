// Given a list of integers nums, 
// swap each consecutive even indexes with each other, 
// and swap each consecutive odd indexes with each other.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// Output
// [2, 3, 0, 1, 6, 7, 4, 5, 8]
// Explanation
// 0 and 2 gets swapped
// 1 and 3 gets swapped
// 4 and 6 gets swapped
// 5 and 7 gets swapped
// 8 remains the same
class Solution {
    solve(nums) {
        for (let i = 0; i < nums.length - 2; i += 4) {
            let temp = nums[i];
            nums[i] = nums[i + 2];
            nums[i + 2] = temp;
        }
        for (let i = 1; i < nums.length - 2; i += 4) {
            let temp = nums[i];
            nums[i] = nums[i + 2];
            nums[i + 2] = temp;
        }
        return nums;
    }
}