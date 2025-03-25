// HADUCA, Princess Eulla CS1B 
// Array Activity 1
// Number 1  create a array that contains different fav singers 
let favSingers = ["Adie", "Bugoy Drillon", "Arthur Nery"];
console.log("First FavSinger is:", favSingers[0]); // and using index notation you can log the first fav singers 
// using index notation
//Number2 // array that contains diff fav numbers 
let favNumbers = [5, 12, 14, 21 ];
console.log("Second FavNumbers:", favNumbers[1]); //  log it using index notaion

// Number3 // array contains this diff mixed Array
let mixedArr = ["string", ["otherarray"], 123, true]; // mixed array

for (let i = 0; i < mixedArr.length; i++) { //and log each items in the mixed array using index notation 
    console.log(`Item ${i}:`, mixedArr[i]);// using for loop
}
