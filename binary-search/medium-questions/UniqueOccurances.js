// Given a list of integers nums, 
// return whether the number of occurrences of every value in the array is unique.

// Note: Numbers can be negative.

// Constraint

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [5, 3, 1, 8, 3, 1, 1, 8, 8, 8]
// Output
// true
// Explanation
// There's 1 occurrence of 5, 2 occurrences of 3, 3 occurrences of 1, and 4 occurrences of 8. 
// All number of occurrences are unique.

// Example 2
// Input
// nums = [-3, -1, -1, -1, -2, -2]
// Output
// true
// Explanation
// There's 1 occurrence of -3, 2 occurrences of -2, and 3 occurrences of -1. 
// All number of occurrences are unique.

// Example 3
// Input
// nums = [3, 1, 1, 2, 2, 2, 3]
// Output
// false
// Explanation
// There are 2 occurrences of 1, and 2 occurrences of 3. 
// So the number of occurrences here is not unique.
function solve(nums) {
    let hash = {}
    let hashChecker = {}
    for (let i = 0; i < nums.length; i++){
        if (hash[nums[i]]) {
            hash[nums[i]] += 1
        } else {
            hash[nums[i]] = 1
        }
    }
    let valArr = Object.values(hash)
    
    for (let j = 0; j < valArr.length; j++) {
        if (hashChecker[valArr[j]] === 1) {
            return false
        } else {
            hashChecker[valArr[j]] = 1
            }
        }
        return true
    }

   function solve2(nums) {
    let checker = {}
    for (let i = 0; i < nums.length; i++) {
        if (checker[nums[i]]){
            checker[nums[i]]++
        }
        else {
            checker[nums[i]] = 1
        }
    }
    
    let setCheck = new Set(Object.values(checker))
    
    return setCheck.size === Object.values(checker).length
}