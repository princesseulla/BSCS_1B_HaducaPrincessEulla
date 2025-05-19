let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"]; // the customers to be served 


console.log("Initial queue:");
console.log(queue); // print the initial queue


let new_customer = prompt("Enter your name to join the queue:"); // you can ask the customers or new customers
queue.push(new_customer); // using .push() it can add the customers

let customer_number = queue.length; // index + 1  
alert(`Hello ${new_customer}, your number is ${customer_number}:`); // print the new customer 

console.log(`Update queue after adding new customer ${new_customer}:`);
console.log(queue);

let service_number = prompt("Enter your number to be served:"); // u can ask now what number to be served after adding a customer 

service_number = parseInt(service_number);

if(service_number >= 1 && service_number <= queue.length) {
    let customer_served = queue[service_number - 1];
    alert(`Now we servicing your number ${service_number}: ${customer_served}`);
    queue.splice(service_number -1, 1); // using splice it remove the queue the served

} else {
    alert("Invalid Number to be entered.");
}

console.log("Update queue after serving:");
console.log(queue);