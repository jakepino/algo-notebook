// Given two integers x, and y return the number of positions where their values differ in their binary representations as a 32-bit integer.

// Constraints

// 0 ≤ x, y < 2 ** 31 
// Example 1
// Input
// x = 9
// y = 5
// Output
// 2
// Explanation
// 9 in binary is 1001 and 5 in binary is 0101, so indices 2 and 3 are different.

class Solution {
    solve(x, y) {
        let diff = 0
        x = x.toString(2)
        y = y.toString(2)

        let largest = x.length >= y.length ? x.length : y.length
        if (x.length < y.length) x = '0'.repeat(y.length - x.length) + x
        if (y.length < x.length) y = '0'.repeat(x.length - y.length) + y

        for (let i = 0; i < largest; i++) {
            if (x[i] !== y[i]) {
                diff += 1
            }
        }

        return diff

    }
}