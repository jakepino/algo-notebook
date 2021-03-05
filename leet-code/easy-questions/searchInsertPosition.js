// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

var searchInsert = function(nums, target) {
    if(nums.includes(target)) return nums.indexOf(target)
    
    let start = 0
    let end = nums.length - 1
    
    while (start < end){
        let mid = Math.floor((start + end)/2)
        if(target < nums[mid]) {
            end = mid-1
        } else {
            start = mid + 1
        }
    }
    return target > nums[start] ? start + 1 : start
};
