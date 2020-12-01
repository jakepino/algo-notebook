// You are given a list of strings ops where each element is either:

// A non-negative integer that should be pushed into a stack
// "POP" meaning pop the top element in the stack
// "DUP" meaning duplicate the top element in the stack
// "+" meaning pop the top two and push the sum
// "-" meaning pop the top two and push top - second
// Return the top element in the stack after applying all operations. If there are any invalid operations, return -1.

// Constraints

// n ≤ 100,000 where n is the length of ops
// Example 1
// Input

// ops = ["1", "5", "DUP", "3", "-"]
// Output

// -2
// Explanation

// Following the operations:

// We push 1 into the stack: [1]
// We push 5 into the stack: [1, 5]
// We duplicate the top element: [1, 5, 5]
// We push 3 into the stack: [1, 5, 5, 3]
// We pop 3 and 5 and push their difference 3 - 5: [1, 5, -2]
// We return the top element which is -2

// Example 2
// Input

// ops = ["+"]
// Output

// -1
// Explanation

// There's no elements in the stack so this is invalid
function solve(ops) {
    let stack = []
    for (let op of ops) {
    
            switch (op) {
                case 'POP':
                    if (stack.length >= 1) {
                        stack.pop()
                        break
                    } else {
                        return -1
                    }
    
                    case 'DUP':
                        if (stack.length >= 1) {
                            let duplicate = stack.pop()
                            stack.push(duplicate)
                            stack.push(duplicate)
                            break
                        } else {
                            return -1
                        }
    
                        case '+':
                            if (stack.length >= 2) {
                                let add = stack.pop() + stack.pop()
                                stack.push(add)
                                break
                            } else {
                                return -1
                            }
    
                            case '-':
                                if (stack.length >= 2) {
                                    let minus = stack.pop() - stack.pop()
                                    stack.push(minus)
                                    break
                                } else {
                                    return -1
                                }
    
                                default:
                          
                                    stack.push(parseInt(op))
                                    break
            }
    
    
        }
        return Number.isFinite(stack[0]) ? stack.pop() : -1
    }
console.log(solve(["1", "5", "DUP", "3", "-"])) 