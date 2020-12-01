// You are given a lowercase alphabet string text. 
// Return a new string where every character in text is mapped to its reverse in the alphabet, 
// so that a becomes z, b becomes y, c becomes x, and so on.

// Example 1
// Input

// text = "abcdef"
// Output

// "zyxwvu"

// solution 1: brute force
// function  solve(text) {
    //         let textAr = text.split("")
    //         let norm = "abcdefghijklmnopqrstuvwxyz".split("")
    //         let reverse = 'zyxwvutsrqponmlkjihgfedcba'.split('')
    //         let newArr = []
    //         for(let i = 0; i < text.length; i++){
    //             newArr.push(reverse[norm.indexOf(textAr[i])])
    //         }
    //         return newArr.join("")
    //     }
    

    // solution 2
function solve(text) {
    const cypher = {
        'a': 'z',
        'b': 'y',
        'c': 'x',
        'd': 'w',
        'e': 'v',
        'f': 'u',
        'g': 't',
        'h': 's',
        'i': 'r',
        'j': 'q',
        'k': 'p',
        'l': 'o',
        'm': 'n',
        'n': 'm',
        'o': 'l',
        'p': 'k',
        'q': 'j',
        'r': 'i',
        's': 'h',
        't': 'g',
        'u': 'f',
        'v': 'e',
        'w': 'd',
        'x': 'c',
        'y': 'b',
        'z': 'a',
    }

    return text.split('').map(char => {
        return cypher[char]
    }).join('')

}