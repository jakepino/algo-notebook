// Given a number n, return a list of all prime numbers smaller than or equal to n in ascending order.

// For example, given the number 10, return the list [2, 3, 5, 7].

// Note: 1 is not a prime number.

// Example 1
// Input

// n = 3
// Output

// [2, 3]
// Example 2
// Input

// n = 10
// Output

// [2, 3, 5, 7]
// Example 3
// Input

// n = 20
// Output

// [2, 3, 5, 7, 11, 13, 17, 19]

// solution
function solve(n) {
      
    let primes = []
       
       for(let i = 2; i <= n; i++){
         
        primes.push(i)
            
          for (let k = 2; k <= primes.length; k++){
                
                if(i % k === 0){
                    
                    primes.pop(i)
                    break
                }
        }

       }
       return primes
 }


console.log(solve([10]))