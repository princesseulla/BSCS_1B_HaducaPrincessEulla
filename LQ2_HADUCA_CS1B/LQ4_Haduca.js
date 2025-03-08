// this may do the matrix and you need to ask first id you want to do matrix.
let createMatrix = prompt(" Do you want to create Matrix? ");
if(createMatrix) {
    let rows = prompt("Enter the number of rows:");
    let cols = prompt("Enter the number of columns:");
    let depth = prompt("Enter the number of layers:");

    let str1 = prompt("Enter first string:");
    let str2 = prompt("Enter second string:");
    let str3 = prompt("Enter third string: ");

    let strings = [str1, str2, str3];
    console.log("Generated Matrix:");
    for(let d = 0; d < depth; d++) {
        console.log("Layer ${d + 1}:");
        for(let r = 0; r < rows; r++) {
            let rowString = "";
            for(let c = 0; c < cols; c++){
                rowString += strings[ d % 3] + "";

            } console.log(rowString);
        }
    }     
} else {
    alert("Thank you, re-run the program if you change your mind. ");
    
}