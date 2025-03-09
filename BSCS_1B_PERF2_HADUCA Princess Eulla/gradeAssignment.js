// If Else If Activity
let user_score = prompt("Input your score:"); // input your score 

if(user_score > 90) {
    console.log("Excellent!"); // using if else you can identify if your grade is good or fair 
} else if (user_score == 80 && user_score <= 89) {
    console.log("Good.");
} else if ( user_score == 70 && user_score <= 79) {
    console.log("Fair.");
} else {
    console.log("Needs Improvement."); // or else you need improvement and learn more.

}