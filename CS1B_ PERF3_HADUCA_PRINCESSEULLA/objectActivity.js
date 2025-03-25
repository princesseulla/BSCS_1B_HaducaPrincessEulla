// HADUCA, Princess Eulla CS1B
// Object Actvity 3
//
let car = {// object thet contains the property of a car
    type: "Sports Car", 
    model: "Lamborghini Aventador", 
    color: "Matte Black"
};
console.log("Initial car object:", car); // console the initial

// using typeof you determine if what type a car is  which is its is an object
console.log("Type of car:", typeof car);

// update the type of a car which is toyota and log the updated object
car.type = "Toyota";
console.log("Updated car object:", car);

// Add new property of a car which is the new is the wheels which is have the 4 wheels in the car.
car.wheels = 4;
console.log("Uodated car:", car);