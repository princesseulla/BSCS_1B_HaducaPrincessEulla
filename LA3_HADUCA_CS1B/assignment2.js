let limit = 0; // this is use of for loop 

let max_limit = prompt("Enter the Limit of the Double loop:"); // and u can inout on what number do u want 

console.log("Result:");
for(let i = 0; i <= max_limit; i++) { // it will result the double loop and add  the added value.
    for(let j = 0; j <= max_limit; j++) {
        let addedValue = i + j;
        console.log(`[${i}][${j}] Added value is ${addedValue}`);
    }
}