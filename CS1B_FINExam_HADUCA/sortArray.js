// this is the the two dimensional array 
/*let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = [Zenvo, Erica, Jordie, Alicia, Redon];

*/

let my_number = prompt("Enter your number:"); // ask the number
let my_name = prompt("Enter your name:");// ask the name 

let usernumber = my_number.split(','); // using split it can split and have a space with comma with the following words 
let username = my_name.split(',');

let merged = numbers.concat().concat(username); // u need to merge the words so u need to use the concat() 
console.log("Merged Array:", merged);

let reversed = numbers.sort().reverse();// and then sort and reverse the numbers 
console.log("Reversed Array:", reversed);

let alphabet = names.sort();
console.log("Names sorted alphabetically:", alphabet);// and using sort it can fix the words/names alphabetically 
// and console it using console