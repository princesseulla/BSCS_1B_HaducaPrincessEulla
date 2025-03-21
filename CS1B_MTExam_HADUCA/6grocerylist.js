let createlist = prompt("Do you want to create grocery list?"); // ask you for yoyr grocery list

if(createlist.toLowerCase() === 'yes') { // if yes 
    let items = prompt("How many items do you want to add in your grocery list?") // ask you how many items 

let grocerylist = [];// contains in your list

for(let i = 0; i < items; i++) { // attempts
    let item = prompt(`Enter items ${i + 1 }:`); 
    grocerylist.push(item); // push your items 
}
let grocerylist_1 =[...grocerylist].sort(); // it will sort 
let grocerylist_2 =[...grocerylist].reverse(); // it will revise


alert(`Original grocery: ${grocerylist.join(", ")}\n ` + // print using alert
      `Sorted grocerylist: ${grocerylist_1.join(", ")}\n` + // alert
      `Reverse: ${grocerylist_2.join(", ")} `); // alert

} else { // else there is no.
    alert("No grocery list created.");

}     