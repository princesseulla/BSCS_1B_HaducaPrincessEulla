let colors = []; // array using your chosen colors

for(let i = 0; i < 3; i++) {
    let color = prompt("Enter your colors:"); // only three colors and attempt 3 times 
    colors.push(color); // add new color
}

console.log("Your color is:", colors); // print using console

let new_color = prompt("Enter new color:"); // enter new
colors.push("green");
console.log("Updated colors:", colors); // updated colors.

