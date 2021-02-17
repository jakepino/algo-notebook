// Give a list of numbers nums, 
// return the number of elements that are in the correct indices, 
// if the list were to be sorted.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [1, 7, 3, 4, 10]
// Output
// 2
// Explanation
// Comparing nums and its sorted version we find that elements 1 and 10 are in their correct positions.

// [1, 7, 3, 4, 10]
// [1, 3, 4, 7, 10]
class Solution {
    solve(nums) {
        let nums1 = [...nums]
        let sortedNums = nums1.sort((a,b) => a - b )
        let count = 0;

        for(let i = 0; i < sortedNums.length; i++){
            sortedNums[i] === nums[i] ? count+= 1 : null
        }
        return count 
    }
}