// HADUCA, Princess Eulla CS1B
// Array Methods Activity 2
// 1. use CONCAT()
let arr1 = ["Cecile", "Lone"] // array 1
let arr2 = ["Emil", "Tobias", "Linus"]; // array 2
let combined_array = arr1.concat(arr2); // using concat we combined the array 1 and array 2 in 1 array.
console.log("Combined Array:", combined_array); // and log it using console.


//2. use PUSH()
let Fruits = ["Banana", "Orange", "Apple", "Mango"]; // the array of fruits
Fruits.push("Kiwi");// using .push() we add a new fruit which is the kiwi
console.log("After use push:", Fruits); // and log it using console.

//3. use UNSHIFT()
let array1 = [1, 2, 3]; // array that contains numbers
array1.unshift(4, 5);// using unshift() u add a new numbers in the beginning of an array
console.log("After use Unshift:", array1);// log it using console

//4. use POP()
let Prutas = ["Banana", "Orange", "Apple", "Mango"]; // array contains prutas
Prutas.pop();// using pop() u remove the last element or the last prutas 
console.log("After use pop:", Prutas);// log it using console

//5. use SHIFT()
let array2 = [1, 2, 4 ];// array contains numbers 
array2.shift();// using shift() remove the first element of the array numbers
console.log("After use shift:", array2);// log using console

//6. use SORT()
Fruits.sort();// using sort() you can sort it alphabetically the fruits array
console.log("After use sort:", Fruits); // log it using console

//7. use SLICE()
let fruits = ["Watermelon", "Banana", "Rambutan", "Mango", "Dragon Fruit"]; // fruits aray that contains fruit
let sliced_fruits = fruits.slice(1, 3);// using slice() you create new array that containg a new portion of an array
console.log("After use sliced:", sliced_fruits); // the only left is the fruits that have been sliced.

//8. use SPLICE()
let months = ["January", "February", "March", "April", "May"];// array contains months
months.splice(1, 3, "June");
console.log("After use spliced:", months);// using splice you removed and insert a new element in the months array.