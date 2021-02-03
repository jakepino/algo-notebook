// Fib
// 0,1,1,2,3,5,8
function fib(N){ 
    let dp = [0,1]; 
    for(let i = 2; i < N; i++){
      let result = dp[0] + dp[1]
      dp[0] = dp[1]
      dp[1] = result;
    }
    return dp[1]
  }