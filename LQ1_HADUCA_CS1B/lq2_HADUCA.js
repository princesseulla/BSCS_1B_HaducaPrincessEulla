// PART III OF THE CODE SNIPPET
let name = prompt("Enter Your name:"); // You enter your name,address,age,classrole,course
let address = prompt("Enter your address:");
let age = prompt("Enter your age:");
let classrole = prompt("Enter your classrole:");
let course = prompt("Enter your course:");

if(age || age <= 0) { // and you need to select onwhat course you enrolled 
    alert("Invalid age entered.Please enter a valid number.");
} else {
    if(course === BSCS) {
        alert("You selected Bachelor of science in computer science");
    } else if(course === "BSM") {
        alert("You selected bachelor of science in management");
    } else if(course === BAEL ) {
        alert("You selected bachelor of arts in english language");
    } else {
        alert("Invalid Course entered");
        course = "BSCS";
    }

    let validrole = ["Officer", "Student", "Teacher"]; // select on what role u have 
    if(!(validrole.includes(classrole))) {
        alert("Invalid classrole.");
        classrole = "Student";
    }
    let iterate = Math.floor(age / 4); // on what age you have based on what you input 
    alert(`Your name will be printed ${iterate} times based on  your age.`);

    for (let i = 0; i < iterate; i++) { // and its iterate 
        console.log(`Iterate ${i + 1}: ${name}`);    
    }
    
}