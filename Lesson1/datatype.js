//variables & data types

/**
 * comment 1
 * comment 2
 * 
 */
let count = 0;
const PI = 3.14;
let address = "Whitby, Wellington"
let isActive = false;
let result;
let max = null;
let floatingNumber = 12;

//  console.log("Welcome");
//  console.log("address");
//  console.log("Address is " + address);
//  console.log("Address is" , address);

// console.log(`Address is ${address}`);

//type.
// console.log(typeof(count));
// console.log(typeof(isActive));
// console.log(typeof(result));
// console.log(typeof(max));
// console.log(typeof(PI));

  const person = {
      firstName: "Piyumi",
      lastName: "Perera",
      age: 36,
      hasVehicle: false,
      address : {
      line1 : 'Whitby',
      line2 : 'Wellington'
      }
 };

console.log(person)
console.log(person['firstName']);
console.log(person.firstName);
console.log(person.address.line2);
console.log(person['address']['line2']);
console.log(typeof(person));