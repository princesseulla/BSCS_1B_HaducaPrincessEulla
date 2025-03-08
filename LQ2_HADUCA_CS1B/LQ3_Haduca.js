// this may ask and list yoyr different choices thet you want to drink.
alert(" Price List:\nA.Pepsi Cola\nB. Coca Cola\nC. Apple (per kg)\nD. Orange (per kg)\nE. Hotdogs (per kg)");
let item_choice = prompt("Enter your choice(A, B, C, D, E): ").toUpperCase;
let QTY = prompt("Enter your quantity:");

let price; // the switch statement anf then the break blocks using alert print using alert.
switch (item_choice) {
    case "A":
        price = 1.5;
        break;
    case "B":
        price = 1.7;
        break;
    case "C":
        price = 5.0;
        break;
    case"D":
        price = 2.5;
        break;
    case"E":
        price = 4.0;
        break;
    default:
        alert("No matching item! Try to re-run the program");
        price = null;
}
if (price != null) {
    let total_price = price * QTY;
    alert("The total Price of the order ${item_choice} x ${QTY}: $${total_price}");
}