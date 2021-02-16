// With respect to a given puzzle string, a word is valid if both the following conditions are satisfied:
// word contains the first letter of puzzle.
// For each letter in word, that letter is in puzzle.
// For example, if the puzzle is "abcdefg", then valid words are "faced", "cabbage", and "baggage"; while invalid words are "beefed" (doesn't include "a") and "based" (includes "s" which isn't in the puzzle).
// Return an array answer, where answer[i] is the number of words in the given word list words that are valid with respect to the puzzle puzzles[i].
 

// Example :

// Input: 
// words = ["aaaa","asas","able","ability","actt","actor","access"], 
// puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
// Output: [1,1,3,2,4,0]
// Explanation:
// 1 valid word for "aboveyz" : "aaaa" 
// 1 valid word for "abrodyz" : "aaaa"
// 3 valid words for "abslute" : "aaaa", "asas", "able"
// 2 valid words for "absoryz" : "aaaa", "asas"
// 4 valid words for "actresz" : "aaaa", "asas", "actt", "access"
// There're no valid words for "gaswxyz" cause none of the words in the list contains letter 'g'.
 

// Constraints:

// 1 <= words.length <= 10^5
// 4 <= words[i].length <= 50
// 1 <= puzzles.length <= 10^4
// puzzles[i].length == 7
// words[i][j], puzzles[i][j] are English lowercase letters.
// Each puzzles[i] doesn't contain repeated characters.


// One Solution, but times out on Leetcode
// var findNumOfValidWords = function(words, puzzles) {
//     // translate words to hashes
//     // translate puzzles to hashes w/ special first character
//     const allWords = [];
//     const allPuzzles = [];
//     for(let w of words){
//         allWords.push(translateWord(w));
//     }
//     for(let puzz of puzzles){
//         allPuzzles.push(translatePuzzle(puzz));
//     }
    
//     const output = [];
//     for(let puzz of allPuzzles){
//         let count = 0;
//         for(let w of allWords){
//             count += isMatch(puzz, w);
//         }
//         output.push(count);
//     }
//     return output;
// };
// //
// //
// //
// function translateWord(word){
//     const wordHash = {};
//     for(let i = 0; i < word.length; i++){
//         wordHash[word[i]] = 1;
//     }
//     return wordHash;
// }
// //
// //
// //
// function translatePuzzle(puzzle){
//     const puzzleHash = {
//         initial: "",
//         hash: {}
//     };
//     puzzleHash.initial = puzzle[0];
//     for(let i = 0; i < puzzle.length; i++){
//         puzzleHash.hash[puzzle[i]] = 1;
//     }
//     return puzzleHash;
// }
// //
// //
// //
// function isMatch(puzzle, word){
//     // return 1 if match, 0 if not
//     if(word[puzzle.initial]){
//         const letters = Object.keys(word);
//         for(let l of letters){
//             if(!puzzle.hash[l]){
//                 return 0;
//             }
//         }
//         return 1;
//     }
//     return 0;
// }

// solution using bitmasking
var findNumOfValidWords = function(words, puzzles) {
    let base = "a".charCodeAt();
    let afterwords = [];
    words.forEach(x => {
      let bit = 0, lenChecker = [], pass = false;
      for(let i = 0; i < x.length; i++){
        if(lenChecker.indexOf(x[i]) < 0){
          lenChecker.push(x[i]);
          if(lenChecker.length > 7){ 
            pass = true;
            i = x.length;
          } else {
            bit |= 1 << (x[i].charCodeAt() - base);
          }
        }
      }
  
      if(!pass){
        afterwords.push(bit);
      }
    });
  
    let res = [], pMemo = {};
  
    puzzles.forEach(puzzle => {
      let count = 0;
  
      let first = 0;
      first |= 1 << (puzzle[0].charCodeAt() - base);
      let mybit = 0;
      for(let i = 0; i < puzzle.length; i++){
        mybit |= 1 << (puzzle[i].charCodeAt() - base);
      }
  
      if(pMemo[[puzzle[0], mybit].join(",")]){
        res.push(pMemo[[puzzle[0], mybit].join(",")]);
      } else {
        afterwords.forEach(wordBit => {
          if((wordBit & first) == first && (mybit & wordBit) == wordBit ){
            count++;
          }
        });
    
        pMemo[[puzzle[0], mybit].join(",")] = count;
        res.push(count);
      }
    });
  
    return res;
  };