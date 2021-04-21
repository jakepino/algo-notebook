// Given a list of integers nums, sort the list in the following way:

// First number is the maximum
// Second number is the minimum
// Third number is the 2nd maximum
// Fourth number is the 2nd minimum
// And so on.
// Constraints

// n ≤ 100,000 where n is the length of nums.
// Example 1
// Input
// nums = [5, 2, 9, 3]
// Output
// [9, 2, 5, 3]
// Example 2
// Input
// nums = [1, 9, 9]
// Output
// [9, 1, 9]
class Solution {
    solve(nums) {
        let minAsc = [...nums].sort((a,b) => a-b)
        let maxAsc = [...nums].sort((a,b) => b-a)
        let length = nums.length
        let sorted = []

        for(let i = 0; i < length; i++){
            if(i % 2 === 1){
                sorted.push(maxAsc[maxAsc.length - 1])
                maxAsc.pop()
            } else {
                sorted.push(minAsc[minAsc.length - 1])
                minAsc.pop()
            }
        }

        return sorted
    }
}