let DSA = []; // array of dsa 
let WebDev = []; // array of webdev


function mainMenu() { // you may choose  using else if 
    let subject = prompt("Select your Subject: A. DSA or B. WebDev");
    if (subject === `A`) {
       manage(DSA, `DSA`);
    } else if (subject === `B`) {
        manage(WebDev, `WebDev` );
    } else {
        alert("Invalid choice.");
    }
}

