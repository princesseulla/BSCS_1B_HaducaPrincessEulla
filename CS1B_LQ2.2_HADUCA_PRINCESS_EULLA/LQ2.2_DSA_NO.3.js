(`List of Items:
    A. Pepsi Cola         Php 30.00
    B. Coca Cola          Php 35.00
    C. Apple (per kg)     Php 100.00
    D. Orange (per kg)    Php 120.00
    E. Hotdogs (per kg)   Php 180.00 
`) // list of the items

let item_choice = prompt("Item of Choice:" ).toUpperCase(); // put your order or your choices using prompt
let QTY = parseInt(prompt("Qty to be ordered:")); // your quantity
let tot_prize = 0; // and the prize 

switch(item_choice) { // using switch statement u can find your choices that u put in item choices prompt.
    case "A": // the a which is the pepsi cola
        tot_prize = qty * 30.00;
        alert(`The total prize of your order ${item_choice} x ${QTY}:  ${tot_prize}`);
        break;
    case "B": // the b which is the coca cola
        tot_prize = QTY * 35.00;
        alert(`The total prize of your order ${item_choice} x ${QTY}: ${tot_prize}`);
        break;
    case "C": // the c which is the apple
        tot_prize = QTY * 100.00;
        alert(`The total prize of your order ${item_choice} x ${QTY}: ${tot_prize}`);
        break;
    case "D": // the d which is the orange 
        tot_prize = QTY * 120.00;
        alert(`The total prize of your order ${item_choice} x ${QTY}: ${tot_prize}`);
        break;
    case "E" : // the e which is the hotdogs
        tot_prize = QTY * 180.00;
        alert(`The total prize of your order ${item_choice} x ${QTY}: ${tot_prize}`);
        break;
    default: // set default if there is not match
        alert(`No matching item! try to re_run the program.`);
    }
