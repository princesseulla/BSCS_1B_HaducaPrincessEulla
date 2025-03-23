// this is a conditional statement that you ask the user about their password and their user name 
// until its match
let user_name = prompt("Enter user_name:"); // the username
let user_password = prompt("Enter your password:"); // the user password

let var_password = "123456"; // the password 

if(user_password === var_password) { // and the if else that ask if the user password match with the password.
    alert(`Welcome ${user_name}`);
} else {// or else you are invalid and does not match
    alert("Maybe Username or Password is Invalid or Does not match");
}