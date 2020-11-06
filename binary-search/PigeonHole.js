// You are given a list nums of length n + 1 picked from the range 1, 2, ..., n.
// By the pigeonhole principle, there must be a duplicate.
// Find and return it. There is guaranteed to be exactly one duplicate.

// Bonus: Can you do this in linear time and constant space?

// Constraints

// n ≤ 100,000
// Example 1
// Input

// nums = [1, 2, 3, 1]
// Output

// 1
// Example 2
// Input

// nums = [4, 2, 1, 3, 2]
// Output

// 2
//

function solve(nums) {
	let checked = {};
	for (let i = 0; i < nums.length; i++) {
		if (checked[nums[i]]) {
			return nums[i];
		} else {
			checked[nums[i]] = nums[i];
		}
	}
}
console.log(solve([1, 2, 3, 1]));
