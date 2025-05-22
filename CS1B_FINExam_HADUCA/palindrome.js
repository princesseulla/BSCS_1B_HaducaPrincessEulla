// this is the two variables
let word1 = "RACECAR"; 
let word2 = "RECORDER";

let my_mord1 = prompt("Enter the first word:"); // ask using prompt on what is the first word
let my_word2  = prompt("Enter the second word:"); // also same with this

function isPalindrome(str) { // using function the words can be reversed and it
  let reversed = str.split('').reverse().join(''); 
  console.log(`Original: ${str}, Reversed: ${reversed}`);
  return str === reversed;
}

console.log(`Is "${word1}" a palindrome?`, isPalindrome(word1)); // and it can determine using console  that the words
console.log(`Is "${word2}" a palindrome?`, isPalindrome(word2));// is palimdrome or not


