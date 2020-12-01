// Given two strings s and t, return the minimum amount of operations on s required to make t a substring of s.
// In each operation, you can choose any position in s and change the character at that position to any other character.

// Example 1
// Input
// s = "foobar"
// t = "oops"
// Output
// 2

// Explanation

// We can take the substring "ooba" and change 'b' to 'p' and 'a' to 's'

//Brute force solution O(n^2)
function solve(s, t) {
	let diff = s.length - t.length;
	let min = t.length;
	for (let i = 0; i <= diff; i++) {
		let counter = 0;
		let j = i;
		for (let k = 0; k < t.length; k++) {
			if (s[j] !== t[k]) {
				counter++;
			}
			j++;
		}
		min = Math.min(min, counter);
	}
	return min;
}
console.log(solve("foobar", "oops"));
// returns 2
