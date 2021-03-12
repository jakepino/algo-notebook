// Given a non-negative integer num, 
// repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?
//  solution 1
var addDigits = function(num) {
    
    let arr = num.toString().split("")
    let parsedArr = []
    
    for(let i = 0; i < arr.length; i++){
        parsedArr.push(parseInt(arr[i]))
    }
        
    let sum = parsedArr.reduce((acc, x) => acc + x)
        
    if(sum < 10){ 
        return sum 
    } else {
        return addDigits(sum)
    }
}
// solution with O(1)
// function addDigits(num){
//     return num==0?0:(num%9==0?9:num%9)
// }