// Given an n by n integer matrix, return the sum of all elements that form a Z in the matrix. 
// For example, given:

// 1 2 3
// 4 5 6
// 7 8 9
// The Z that's formed is [1, 2, 3, 5, 7, 8, 9] and its sum is 35.

// Constraints

// n ≤ 1000

// Example 1
// Input
// matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// Output
// 35
solve(matrix) {
    let n = matrix.length - 1
    let sum = 0
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){
            if(i === 0){
                sum += matrix[i][j]
            }else if(i === n){
                sum += matrix[i][j]
            } else if (j === n-i){
                sum += matrix[i][j]
            }
        }
    }
    return sum
}
