// Given a two-dimensional matrix of integers, for each zero in the original matrix, 
// replace all values in its row and column with zero, and return the resulting matrix.

// Constraints

// n, m ≤ 250 where n and m are the number of rows and columns in matrix
// Example 1
// Input
// matrix = [
//     [5, 0, 0, 5, 8],
//     [9, 8, 10, 3, 9],
//     [0, 7, 2, 3, 1],
//     [8, 0, 6, 7, 2],
//     [4, 1, 8, 5, 10]
// ]
// Output
// [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 3, 9],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 5, 10]
// ]
// Explanation
// These rows contain a 0: [0, 2, 3] and the returned matrix contains 0 in those rows.
// These columns contain a 0: [0, 1, 2] and the returned matrix contains 0 in those columns.
function solve(matrix) {
    let colArr = []
    let rowArr = []
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){
            if(matrix[i][j] === 0){
                rowArr.push(i)
                colArr.push(j)
            }
        }
    }
    
    for(let k = 0; k < matrix.length; k++){
        for( let n = 0; n < matrix.length; n++){
            if(rowArr.includes(k)){
                matrix[k][n] = 0
            }
            if (colArr.includes(n)){
                matrix[k][n] = 0
            }
        }
    }
    return matrix
}