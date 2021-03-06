// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// var intersection = function(nums1, nums2) {
//     let results = []
//     let set = new Set()
    
//     for(let i = 0; i < nums2.length; i++){
//         set.add(nums2[i])
//     }
    
//     for(let i = 0; i < nums1.length; i++){
//         if(set.has(nums1[i])){
//             results.push(nums1[i])
//             set.delete(nums1[i])
//         }
//     }
    
//     return results
// };

// FASTER SOLUTION
var intersection = function (nums1, nums2) {
    let set = new Set() 
    shorterArr = (nums1.length < nums2.length) ? nums1 : nums2,
    longerArr = (nums1.length > nums2.length) ? nums1 : nums2;
    
    shorterArr.forEach(num => {
        if (longerArr.includes(num)) {
            set.add(num);
        }
    });
    
    return Array.from(set);
};