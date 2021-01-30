// Given an integer n, we apply this transformation until it becomes a 1: take each of the digits in n, square it, and then take their sum.

// Return whether n will end up in 1 after the transformations.

// Example 1
// Input
// n = 7
// Output
// true
// Explanation
// This is a happy number since we get this sequence [49, 97, 130, 10, 1]

// 7 ** 2 = 49
// 4 ** 2 + 9 ** 2 = 97
// 9 ** 2 + 7 ** 2 = 130
// 1 ** 2 + 3 ** 2 + 0 ** 2 = 10
// 1 ** 2 + 0 ** 2 = 1
// Example 2
// Input
// n = 11
// Output
// false
// Explanation
// This is not a happy number since it ends up in a cycle: [2, 4, 16, 37, 58, 89, 145, 42, 20, 4]

// 2 ** 2 = 4
// 4 ** 2 = 16
// 1 ** 2 + 6 ** 2 = 37
// 3 ** 2 + 7 ** 2 = 58
// 5 ** 2 + 8 ** 2 = 89
// 8 ** 2 + 9 ** 2 = 145
// 1 ** 2 + 4 ** 2 + 5 ** 2 = 42
// 4 ** 2 + 2 ** 2 = 20
// 2 ** 2 + 0 ** 2 = 4
class Solution {
    solve(n) {
        if (n === 1) return true;
        let sum = 0;

        let history = {}
        while (n !== 1 && !history[sum]) {
            history[sum] = true;
            sum = 0;
            n.toString().split('').forEach(num => sum += num ** 2)
            n = sum;
        }
        return sum === 1;
    }
}
