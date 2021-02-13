// Given a list of positive integers nums, 
// return the largest positive integer that divides each of the integers.

// Constraints

// 1 ≤ n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [6, 12, 9]
// Output
// 3
// Explanation
// 3 is the largest integer that divides into 6, 12, and 9.

// Example 2
// Input
// nums = [6, 7, 9]
// Output
// 1
// Explanation
// 7 is a prime number so only 1 divides into it.

class Solution {
    solve(nums) {
            let divisor = 1
            let greatestDivisor = 1
            let count = 1
            let smallest = Math.min(...nums)
            while(divisor <= smallest){
            // Will go thorugh all the numbers checking if they are divisable by the current divisor. Increasing the count if they are.
                for (let i = 0; i < nums.length; i++){
                    if (nums[i] % divisor === 0){
                        console.log(count)
                        count++
                            }
                    if (count === nums.length){
                        greatestDivisor = divisor
                            }
                    }
                count = 0
                divisor += 1
            }
            return greatestDivisor
        }
    } 