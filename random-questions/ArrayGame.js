let arr = [2, 4, 2, 10]

function game(arr){
let min = Math.min(...arr)
let max = Math.max(...arr)

let counter = 0

  let i = 0
  while(min !== max){
  
  if(arr[i] !== max){
    arr[i] = arr[i]+1
    i++
    
  }else{
    i++
  }
  if(i === arr.length){
    i = 0
  }
  console.log(arr)
  counter++
  max = Math.max(...arr)
  min = Math.min(...arr)

  
  }

  return Math.ceil(counter/arr.length)

}

game(arr)
//==> 8