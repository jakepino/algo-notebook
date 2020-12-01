// Given an integer n, return a list of integers from 1 to n as strings except for multiples of 3 use “Fizz” instead of the integer
// and for the multiples of 5 use “Buzz”.
// For integers which are multiples of both 3 and 5 use “FizzBuzz”.

// Example 1
// Input

// n = 15
// Output

// ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

// Solution
function solve(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			arr.push("FizBuzz");
		} else if (i % 5 === 0) {
			arr.push("Buzz");
		} else if (i % 3 === 0) {
			arr.push("Fizz");
		} else {
			arr.push(i.toString());
		}
	}
	return arr;
}
console.log(solve(15));
