// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

 

// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.


var mySqrt = function(x) {
    
    let half = Math.floor(x / 2); // 8 / 2 = 4
    let start = 1;
    let end = x;
    while(start <= end) {
        if(half * half === x) return half;
       if (half * half > x) {  // 4 * 4 = 16, so 16 > 8
            end = half - 1  // end = 3
            half = Math.floor((start + end) / 2)
        } else {
            start = half + 1  // 3
            half = Math.floor((start + end) / 2)
        }
    }
    return half
};