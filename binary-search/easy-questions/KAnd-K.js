// Given a list of integers nums, return the largest integer k where k and -k both exist in nums (they can be the same integer). If there's no such integer, return -1.

// Example 1
// Input
// nums = [-4, 1, 8, -5, 4, -8]
// Output
// 8

// Example 2
// Input
// nums = [5, 6, 1, -2]
// Output
// -1

// Example 3
// Input
// nums = [1, 2, 0, 3, 4]
// Output
// 0

//brute force first attempt:
function solve(nums) {
	const checked = {};
	let highVal = -1;
	for (let i = 0; i < nums.length; i++) {
		if (checked[-nums[i]] === 1) {
			if (highVal < Math.abs(nums[i])) {
				highVal = Math.abs(nums[i]);
			}
		} else {
			checked[nums[i]] = 1;
		}
	}
	if (checked[0]) {
		return highVal > 0 ? highVal : 0;
	}
	return highVal;
}

console.log(solve([-4, 1, 8, -5, 4, -8]));
