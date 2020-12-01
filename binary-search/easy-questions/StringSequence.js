// Given strings s0, s1 and a positive integer n, return the nth term of the sequence A where:

// A[0] = s0
// A[1] = s1
// A[n] = A[n - 1] + A[n - 2] if n is even, otherwise A[n] = A[n - 2] + A[n - 1].
// For example, given s0 = "a" and s1 = "b", the sequence A would be:

// "a"
// "b"
// "ba" ("b" + "a")
// "bba" ("b" + "ba")
// "bbaba" ("bba" + "ba")

// Example 1
// Input
// s0 = "et"
// s1 = "r"
// n = 0
// Output
// "et"

// Example 2
// Input
// s0 = "a"
// s1 = "p"
// n = 1
// Output
// "p"

// Example 3
// Input
// s0 = "zs"
// s1 = "v"
// n = 3
// Output
// "vvzs"

// Example 4
// Input
// s0 = "dx"
// s1 = "a"
// n = 4
// Output
// "aadxadx"
function solve(s0, s1, n) {
        
    let A = [s0,s1]
    
    for (let i = 2; i <= n; i++){
         if (i % 2 === 0){   
            A[i] = A[i - 1] + A[i - 2]
         } else {
            A[i] = A[i-2] + A[i -1]
        }
    }
    return A[n]
}