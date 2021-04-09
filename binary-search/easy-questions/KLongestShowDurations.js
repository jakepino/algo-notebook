// Given a list of strings shows, 
// a list of integers durations, 
// and an integer k, 
// where shows[i] and durations[i] represent the name and duration watched by the ith person, 
// return the total duration watched of the k most watched shows.

// Constraints

// 0 ≤ k ≤ n ≤ 100,000 where n is the length of shows and durations
// Example 1
// Input
// shows = ["Top Gun", "Aviator", "Top Gun", "Roma", "Logan"]
// durations = [5, 3, 5, 13, 4]
// k = 2
// Output
// 23
// Explanation
// The top 2 most watched movies are "Roma" and "Top Gun" for total durations of 13 and 10 = 5+ 5.
class Solution {
    solve(shows, durations, k) {
        
        let viewedShows = {}
        for(let i = 0; i < shows.length; i++){
            viewedShows[shows[i]] ? viewedShows[shows[i]] += durations[i] :
            viewedShows[shows[i]] = durations[i]
        }

        let topShows = Object.values(viewedShows)
        topShows.sort((a,b) => b-a)
        
        let results = 0
        let i = 0
        while(i<k){
            results += topShows[i]
            i++
        }

        return results
    }
}