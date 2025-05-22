let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];// this is the following multi dimensional array
let subArray2 = [24, 65, 21, 5, 9];// the names and the numbers

let names = prompt("Enter your name:");// ask using prompt()
let age = prompt("Enter your age:");

let my_name = names.split(',');
let my_age = age.split(',');

// i used the for loop but i dont think this is correct i dont knw wht to use in this the function
let restructured_Array = [];

for (let i = 0; i < names.length; i++) {
    restructured_Array.push([names[i].trim(), age[i].trim()]);
}
console.log("Restructured Array:"); // print it with console
for (let i = 0; i < restructured_Array.length; i++) {
    console.log(`[${restructured_Array[i][0]}, ${restructured_Array[i][1]}]`);
}