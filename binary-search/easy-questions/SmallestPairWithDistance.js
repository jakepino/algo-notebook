//You are given a list of integers nums.
// Consider any pair of indices i < j such that j - i > 1.
// Return the smallest pair sum.

// Constraints
// 3 ≤ n ≤ 100,000 where n is the length of nums
// Example 1

// Input
// nums = [2, 3, 1, 1, 3]
// Output
//3
//Explanation
//We pick values 2 and 1 for total sum of 3. Note that we can't pick 1 and 1 since it would violate the j - i > 1 constraint.

function solve(nums) {
	let min = nums[0];
	let sum = nums[0] + nums[2];
	let ind = 1;
	for (let i = 2; i < nums.length; i++) {
		sum = Math.min(sum, nums[i] + min);
		min = Math.min(nums[ind++], min);
	}
	return sum;
}
console.log(solve([2, 3, 1, 1, 3]));
