// You are given a string animals and another string dinosaurs. 
// Every letter in animals represents a different type of animal and every unique character in dinosaurs represents a different dinosaur.

// Return the total number of dinosaurs in animals.

// Example 1
// Input
// animals = "abacabC"
// dinosaurs = "bC"
// Output
// 3
// Explanation
// There's two types of dinosaurs "b" and "C". There's 2 "b" dinosaurs and 1 "C" dinosaur. Note we didn't count the lowercase "c" animal as a dinosaur.

// Example 2
// Input
// animals = "abc"
// dinosaurs = "cd"
// Output
// 1
// Explanation
// Only "c" is a match
class Solution {
    solve(animals, dinosaurs) {
        let aniArr = animals.split('')
        let dinoArr = dinosaurs.split('')

        let counter = 0
        for (let i = 0; i < aniArr.length; i++) {
            let count = 0
            
            for (let j = 0; j < dinoArr.length && count === 0; j++) {
                if (aniArr[i] === dinoArr[j]) {
                    counter += 1
                    count = 1
                }
            }
        }
        return counter
    }
}