// You are given a list of integers fighters and a two dimensional list bosses. The fighters list contains 1s and 0s with a 1 representing a fighter. Similarly, each bosses list contains 1s and 0s with a 1 representing a boss.

// Given that fighters can beat a bosses row if it contains more fighters than bosses, 
// return a new bosses matrix with defeated boss rows removed.

// Constraints

// k ≤ 100,000 where k is the length of fighters
// 0 ≤ n * m ≤ 100,000 where n and m are the number of rows and columns in bosses
// Example 1
// Input
// fighters = [0, 1, 1]
// bosses = [
//     [0, 0, 0],
//     [0, 0, 1],
//     [0, 1, 1],
//     [1, 1, 1]
// ]
// Output
// [
//     [0, 1, 1],
//     [1, 1, 1]
// ]
// Explanation
// There's 2 fighters so is able to beat [0, 0, 0] and [0, 0, 1] bosses.
class Solution {
    solve(fighters, bosses) {
        let fightersTotal = 0;
        let bossesTotal = 0;
        let finalArr = [];

        for(let num of fighters){
            if(num === 1){
                fightersTotal += 1
            }
        }

        for(let i = 0; i < bosses.length; i++){
            for(let j = 0; j < bosses[i].length; j++){
                if(bosses[i][j] === 1){
                    bossesTotal += 1
                }
            }
            if(fightersTotal <= bossesTotal){
                finalArr.push(bosses[i])
            }
            bossesTotal = 0;
        }
        return finalArr

    }
}