// Sample customers to preload
let initialCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
let hashTable = new Array(10); // Basic hash table with fixed size

// Simple hash function (sum of char codes mod table size
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % hashTable.length;
}

// Function to insert into hash table with linear probing for collision
function insertCustomer(name) {
    let index = hashFunction(name);
    let originalIndex = index;
    while (hashTable[index] !== undefined) {
        index = (index + 1) % hashTable.length;
        if (index === originalIndex) {
            alert("Hash Table is full!");
            return;
        }
    }
    hashTable[index] = name;
    return index + 1; // Return customer number (index + 1)
}

// Function to find customer by number (index + 1)
function serviceCustomer(customerNumber) {
    let index = customerNumber - 1;
    if (hashTable[index] !== undefined) {
        let name = hashTable[index];
        alert("Now serving: " + name);
        hashTable[index] = undefined;
    } else {
        alert("No customer found at that number.");
    }
}

// Display the current state of the hash table
function displayHashTable() {
    console.log("Current Hash Table:");
    for (let i = 0; i < hashTable.length; i++) {
        console.log(`Slot ${i + 1} ${hashTable[i] !== undefined ? hashTable[i] : "Empty"}`);
    }
}

// Insert 5 customers
for (let i = 0; i < initialCustomers.length; i++) {
    let customer = initialCustomers[i];
    let number = insertCustomer(customer);
    alert(`Customer ${customer} has been assigned number ${number}`);
}
displayHashTable();

// Service loop (repeat 5 times)
for (let i = 0; i < 5; i++) {
    let numStr = prompt("Enter customer number to service (1-10):");
    let number = parseInt(numStr);
    if (!isNaN(number) && number >= 1 && number <= hashTable.length) {
        serviceCustomer(number);
        displayHashTable();
    } else {
        alert("Invalid number.");
        i--; // Retry the same round
    }
}