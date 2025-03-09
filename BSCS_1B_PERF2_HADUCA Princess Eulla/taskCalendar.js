// Switch Statement Activity
let days = prompt("Enter the day of the week:");

switch(days) {
    case "Monday":
        console.log("Your task for Monday is: Finish Your Assignments.");
        break;
    case "Tuesday": 
        console.log("Your task for tuesday is: You need to attend online meetings.");
        break;
    case "Wednesday": 
        console.log("Your task for wednesday is: Study for your coming exam.");
        break;
    case "Thursday":
        console.log("Your task for thursday is: Work on your project.");
        break;
    case "Friday": 
        console.log("Your task for friday is: Do household chores.");
        break;
    default:
        console.log("Maybe you need to take a rest and relax.");
        break;
}