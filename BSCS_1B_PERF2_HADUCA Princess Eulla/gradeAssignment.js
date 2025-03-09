// If Else If Activity
let user_score = prompt("Input your score:");

if(user_score > 90) {
    console.log("Excellent!");
} else if (user_score == 80 && user_score <= 89) {
    console.log("Good.");
} else if ( user_score == 70 && user_score <= 79) {
    console.log("Fair.");
} else {
    console.log("Needs Improvement.");

}