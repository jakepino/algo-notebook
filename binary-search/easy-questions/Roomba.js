// A Roomba robot is currently sitting in a cartesian plane at (0, 0).
// You are given a list of its moves that it will make, containing NORTH, SOUTH, WEST, and EAST.

// Return whether after its moves it will end up in the coordinate (x, y).

// Example 1
// Input

// moves = ["NORTH", "EAST"]
// x = 1
// y = 1

// Output

// true

// Explanation

// Moving north moves it to (0, 1) and moving east moves it to (1, 1)

// Example 2
// Input

// moves = ["WEST", "EAST"]
// x = 1
// y = 0

// Output

// false

// Explanation

// This Roomba will end up at (0, 0)

// solution:
function solve(moves, x, y) {
	let newX = 0;
	let newY = 0;
	for (let i = 0; i < moves.length; i++) {
		if (moves[i] === "EAST") {
			newX += 1;
		} else if (moves[i] === "WEST") {
			newX -= 1;
		} else if (moves[i] === "NORTH") {
			newY += 1;
		} else if (moves[i] === "SOUTH") {
			newY -= 1;
		}
	}
	if (newX === x && newY === y) {
		return true;
	} else {
		return false;
	}
}
let moves = ["NORTH", "EAST"];
let x = 1;
let y = 1;

console.log(solve(moves, x, y));
// expects true
