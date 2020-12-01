// Given a string s, return whether it is a palindrome.
// A palindrome is when the word is the same forwards and backwards.

// For example, "tacocat" is a palindrome.

// Example 1
// Input

// s = "racecar"
// Output

// true
// Example 2
// Input

// s = "evilolive"
// Output

// true
// Example 3
// Input

// s = "palindrome"
// Output

// false

//solution:
function solve(s) {
	for (let i = 0; i < s.length; i++) {
		if (s[i] !== s[s.length - i - 1]) {
			console.log(s[s.length - i]);
			return false;
		}
	}
	return true;
}

console.log(solve("tacocat"));
//expects true
