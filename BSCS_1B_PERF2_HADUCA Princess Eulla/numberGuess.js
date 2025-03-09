// While Loop Activity
let correctNumber = Math.floor(Math.random() * 10) + 1; // program using while loop 
let guess;
do {
    guess = prompt("Guess a number between 1 to 10:");
    if(guess > correctNumber) {
        console.log("Too High!");
       } else if (guess < correctNumber) { //  where you guess the number between 1 to 10 
        console.log("TooLow!");// if it is too low or too high 
       } else {
        console.log("Correct!"); // if it is correct then you are right.
       }
    } while (guess != correctNumber);
