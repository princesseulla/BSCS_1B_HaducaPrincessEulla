// While Loop Activity
let correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = prompt("Guess a number between 1 to 10:");
    if(guess > correctNumber) {
        console.log("Too High!");
       } else if (guess < correctNumber) {
        console.log("TooLow!");
       } else {
        console.log("Correct!");
       }
    } while (guess != correctNumber);
