let FavNumber = 10;// store your fav number

let guess = prompt("What is your favNumber?"); //ask using prompt
while(guess != FavNumber){
    guess = prompt("What is your Fav Number?");// if this is not match it will guess until it finds right.
}


if(guess > FavNumber){ // if your guess too high it print too high
    console.log("Too High!");
} else if(guess < FavNumber){ // if your guess is too low then it will print it.
    console.log("Too Low!");
} else {
    console.log("Correct!"); // until your guess is correct.
}



    