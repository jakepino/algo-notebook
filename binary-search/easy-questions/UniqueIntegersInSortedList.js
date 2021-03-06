// Given a list of sorted integers nums return the number of unique integers in the list.

// Contraints
// k ≪ n ≤ 1,000,000 where n is the length of nums and k is the number of unique integers.
// Notes

// O(n) is accepted but O(k log n) is encouraged.

// Example 1

// Input
// nums = [2, 2, 2, 3, 4, 6, 6]

// Output
// 4

// Explanation
// The unique numbers are [2, 3, 4, 6]

// method 1:
function solve1(nums) {
	let uniq = {};
	let counter = 0;

	for (let i = 0; i < nums.length; i++) {
		if (!uniq[nums[i]]) {
			uniq[nums[i]] = 1;
			counter++;
		}
	}
	return counter;
}

let nums = [2, 2, 2, 3, 4, 6, 6];
console.log(solve1(nums));

// method 2 using Set:
function solve2(nums) {
	return new Set(nums).size;
}
console.log(solve2(nums));

//method 3 using hash:
function solve3(nums) {
	let freq = {};
	nums.forEach((num) => {
		if (freq[num]) {
			freq[num]++;
		} else {
			freq[num] = 1;
		}
	});
	return (
		nums.length -
		Object.values(freq)
			.filter((item) => item > 1)
			.reduce((accum, val) => accum + val - 1, 0)
	);
}

console.log(solve3(nums));
