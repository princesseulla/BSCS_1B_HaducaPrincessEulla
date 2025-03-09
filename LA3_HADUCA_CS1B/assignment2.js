let limit = 0; 

let max_limit = prompt("Enter the Limit of the Double loop:");

console.log("Result:");
for(let i = 0; i <= max_limit; i++) {
    for(let j = 0; j <= max_limit; j++) {
        let addedValue = i + j;
        console.log(`[${i}][${j}] Added value is ${addedValue}`);
    }
}