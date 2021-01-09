// Given a two dimensional list of integers votes, where each list has two elements [candidate_id, voter_id], report whether any voter has voted more than once.

// Constraints

// n ≤ 100,000 where n is the length of votes
// Example 1
// Input
// votes = [
//     [3, 1],
//     [3, 0],
//     [3, 4],
//     [3, 3],
//     [3, 2]
// ]
// Output
// false
// Explanation
// Every voter has voted once.

class Solution {
    solve(votes) {
        let set = new Set()
        for (let i = 0; i < votes.length; i++) {
            if (!set.has(votes[i][1])) {
                set.add(votes[i][1])
            } else {
                return true
            }
        }
        return false

    }
}