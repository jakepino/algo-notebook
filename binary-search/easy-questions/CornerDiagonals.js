// You are given an integer n representing the length of an n by n board. 
// Remove all cells that are diagonal to one of the four corners 
// (top left, top right, bottom right, and bottom left) 
// and return the number of empty cells leftover.

// For example, given n = 4

// X O O X
// O X X O
// O X X O
// X O O X
// We see there's 8 empty "O" squares.

// Example 1
// Input
// n = 4
// Output
// 8
function solve(n) {
    if(n % 2 === 0){
        return (n * n) - (n * 2)
    } else {
        return (n * n) - ((n * 2) - 1)
    }
}