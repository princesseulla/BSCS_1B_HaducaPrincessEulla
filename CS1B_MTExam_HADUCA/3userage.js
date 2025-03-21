let age = prompt("What is your age?"); // ask your age using prompt

if(age <= 5){
    console.log("Toddler"); // and it guess your age if yoyr under in this category 
} else if(age >= 5 && age <= 12){ // or this
    console.log("Child");
} else if(age >= 13 && age <= 19){ // or this
    console.log("Teenager");
} else if(age >= 20 && age <= 35){ // and this using if else u can find on what u belongs in your age 
    console.log("Young Adult");
} else if(age >= 36 && age <= 60){
    console.log("Middle-Aged");
} else {
    console.log("Senior"); // or else you are senior 
}

