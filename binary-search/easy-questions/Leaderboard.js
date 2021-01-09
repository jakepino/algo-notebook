// You are given a list of integers nums, representing the number of chess matches each person has won. Return a relative ranking (0-indexed) of each person. If two players have won the same amount, their ranking should be the same.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [50, 30, 50, 90, 10]
// Output
// [1, 2, 1, 0, 3]

class Solution {
    solve(nums) {
        let ranking = 0
        let original = [...nums]
        let sorted = nums.sort((a,b) => b-a)
        const players = {}
        for(let i = 0; i < nums.length; i++){
            if(players[sorted[i]] == null){
                players[sorted[i]] = ranking
                ranking += 1
            }
        }
        for(let j = 0; j < nums.length; j++){
            original[j] = players[original[j]]
        }
        return original
    }
}