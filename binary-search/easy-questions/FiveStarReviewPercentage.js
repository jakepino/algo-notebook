// You are given a two-dimensional list of integers reviews and a positive integer threshold. 
// Each element reviews[i] contains [x, y] meaning product i had x number of 5-star reviews and a total of y reviews. 
// All reviews are for one store.

// Return the minimum number of additional 5-star reviews we need such that the percentage of 5-star reviews in the store is at least threshold. 
// You can assume that it's possible to reach threshold% of 5-star reviews.

// Constraints

// 1 ≤ n ≤ 100,000 where n is the length of reviews
// 0 ≤ threshold ≤ 100
// Example 1
// Input
// reviews = [
//     [4, 4],
//     [1, 2],
//     [3, 6]
// ]
// threshold = 77
// Output
// 6
// Explanation
// So in total there were 8 5-star reviews and a total of 12 reviews. To reach 77% 5-star reviews, we need 6 more 5-star reviews.
class Solution {
    solve(reviews, threshold) {
        let counter = 0
        let fiveStars = 0
        let total = 0
        for(let i = 0; i < reviews.length; i++){
            fiveStars += reviews[i][0]
            total += reviews[i][1]
        }
        
        let currentPer = Math.floor((fiveStars/total)*100)
        while(currentPer < threshold){
            counter++
            fiveStars++
            total++
            currentPer = Math.floor((fiveStars/total)*100)
        }
        return counter
     
    }
}