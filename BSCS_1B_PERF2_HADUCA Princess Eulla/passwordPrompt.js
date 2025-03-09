// Do-While Activity
let user_password = prompt("enter a password:");

let password = "secret1234";

if(user_password !== password) {
    console.log("Incorrect, Please try again.");
} while(user_password == password) {
    console.log("Access Granted!");
}