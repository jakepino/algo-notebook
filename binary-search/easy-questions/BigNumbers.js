// Given a two-dimensional integer matrix, return the total number of integers whose value is the largest in its row and in its column. For example, given
// 1 3 2
// 4 6 5
// 1 5 7
// Return 2 since 6 and 7 meet the criteria.

// Constraints
// The number of rows in matrix is at most 200
// The number of columns in matrix is at most 200
// Example 1
// Input
// matrix = [
//     [1, 3, 2],
//     [6, 6, 5],
//     [1, 5, 7]
// ]
// Output
// 3
// Explanation
// The 3 big numbers are 6, 6, and 7.

function solve(matrix) {
	let maxes = 0;
	let rowMaxes = matrix.map((row) => Math.max(...row));
	for (let i = 0; i < matrix[0].length; i++) {
		let colMax = matrix[0][i];
		for (let j = 1; j < matrix.length; j++) {
			colMax = Math.max(colMax, matrix[j][i]);
		}
		for (let k = 0; k < matrix.length; k++) {
			if (matrix[k][i] === colMax && matrix[k][i] === rowMaxes[k]) {
				maxes++;
			}
		}
	}
	return maxes;
}
let matrix = [
	[1, 3, 2],
	[6, 6, 5],
	[1, 5, 7],
];
console.log(solve(matrix));
