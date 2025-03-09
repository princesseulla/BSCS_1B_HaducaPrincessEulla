// Do-While Activity
let user_password = prompt("enter a password:"); // this u can enter your password

let password = "secret1234"; // this is the correct password 

if(user_password !== password) {
    console.log("Incorrect, Please try again."); // using while loop u can guess the password 
} while(user_password == password) {
    console.log("Access Granted!"); // if the password id correct then its outpit is access granted
}// it goes until you know the password 