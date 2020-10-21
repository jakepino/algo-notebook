// Given a list of positive integers nums,
// return the number of integers that have odd number of digits.

// Example 1
// Input

// nums = [1, 800, 2, 10, 3]
// Output

// 4
// Explanation

// [1, 800, 2, 3] have odd number of digits.

//solution
function solve(nums) {
	let counter = 0;
	for (let i = 0; i < nums.length; i++) {
		let val = nums[i].toString();
		if (parseInt(val.length) % 2 !== 0) {
			counter++;
		}
	}
	return counter;
}
let nums = [1, 800, 2, 10, 3];
console.log(solve(nums));
//except 4
