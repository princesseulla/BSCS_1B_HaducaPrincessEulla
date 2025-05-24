//This code is implements a simple restuarant ordering system that allows cashiers to log.
// Login System
function login() {
    const cashiers = { "admin": "1234", "cashier1": "5678" };
    let username = prompt("Enter username:");
    let password = prompt("Enter password:");
    if (cashiers[username] === password) {
      console.log("Login successful!");
      startOrdering();
    } else {
      alert("Invalid credentials!");
    }
  }
  
  // Menu Structure
  const menu = {
    Burgers: [
      { name: "Cheese Burger", price: 150, stock: 10 },
      { name: "Chicken Burger", price: 140, stock: 8 },
      { name: "Veggie Burger", price: 100, stock: 15 },
      { name: "Bacon Burger", price: 130, stock: 14 },
      { name: "Egg with Ham Burger", price: 120, stock: 20},
    ],
    Sides: [
      { name: "Fries", price: 80, stock: 10 },
      { name: "Onion Rings", price: 90, stock: 5 },
      { name: "Potato Mojos", price: 60, stock: 10 },
      { name: "Mozzarella", price: 50, stock: 6 },
      { name: "Hotdogs", price: 50, stock: 11},
    ],
    Drinks: [
      { name: "Soda", price: 50, stock: 20 },
      { name: "Juice", price: 60, stock: 15 },
      { name: "Smoothies", price: 80, stock: 4 },
      { name: "Milk Tea", price: 39, stock: 10 },
      { name: "Coke Float", price: 50, stock: 12 },
    ],
    Desserts: [
      { name: "Ice Cream", price: 100, stock: 12 },
      { name: "Cake Slice", price: 120, stock: 8 },
      { name: "Waffles", price: 90, stock: 10 },
      { name: "Cookies", price: 140, stock: 7 },
      { name: "Maja", price: 250, stock: 30},
    ]
  };
  
  let cart = [];
  
  // Add Item to Cart
  // Adds  an item to the cart it if exists in the menu and there is sufficient stock.
  function addToCart(category, itemName, qty) {
    let item = menu[category]?.find(i => i.name === itemName);
    if (item && item.stock >= qty) {
      cart.push({ name: itemName, qty, price: item.price * qty });
      item.stock -= qty;
      console.log(`${qty} ${itemName} added to cart.`);
    } else {
      alert("Insufficient stock or item not found.");
    }
  }
  
  // Remove Item from Cart
  // Removes an item from the cart, adjusting the quantity or removing it entirely if the quantity drops the zero.
  function removeFromCart(itemName, qty) {
    let index = cart.findIndex(i => i.name === itemName);
    if (index !== -1) {
      let item = cart[index];
      item.qty -= qty;
      if (item.qty <= 0) cart.splice(index, 1);
      console.log(`${qty} ${itemName} removed from cart.`);
    } else {
      alert("Item not found in cart.");
    }
  }
  
  // Print Receipt
  // Display the items in the cart and calculates the total cost
  function printReceipt() {
    console.log("=== Receipt ===");
    cart.forEach(item => console.log(`${item.qty} x ${item.name} - ${item.price} PHP`));
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`Total: ${total} PHP`);
    let payment = prompt(`Enter payment amount (Total: ${total} PHP):`);
    if (payment >= total) {
      console.log("Payment received.");
      console.log("Thank you for your order!");
      cart.length = 0;
    } else {
      alert("Insufficient payment!");
    }
  }
  
  // Ordering Flow
  function startOrdering() { 
    // Provides a loop for the user 
    let action;
    while (action !== "exit") {
      action = prompt("Choose: add, remove, receipt, cancel, exit").toLowerCase();
      if (action === "add") {
        let category = prompt("Enter category: Burgers, Sides, Drinks, Desserts");
        let itemName = prompt("Enter item name:"); //add items to the cart
        let qty = parseInt(prompt("Enter quantity:"), 10);
        addToCart(category, itemName, qty);
      } else if (action === "remove") {
        let itemName = prompt("Enter item name:");
        let qty = parseInt(prompt("Enter quantity:"), 10);
        removeFromCart(itemName, qty); //remove items from the cart
      } else if (action === "receipt") { //print the receipt
        printReceipt();
      } else if (action === "cancel") { 
        cart.length = 0;
        console.log("Order canceled."); //cancel the order
      } else if (action !== "exit") { //exit the system
        alert("Invalid option.");
      }
    }
  }
  
  // Start System
  login();
