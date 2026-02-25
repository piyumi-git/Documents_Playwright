
let person={
    name:"Piyumi",
    age:36,
    city:"Wellington"
}
console.log("Age is", person.age);

person.name="Sahensha";
console.log("New name is", person.name);

person.country="New Zealand";
console.log("Country is", person.country);

console.log("Original person object is", person);

//Object
let keys=Object.keys(person);
console.log("Keys", keys);

let values=Object.values(person);
console.log("Values", values);

let entries=Object.entries(person);
console.log(entries);

for(let key in person){console.log(key,":",person[key]);}

Object.keys(person).forEach(k=>{console.log(k,":",person[k]);})

//set (No duplicate)
let dataSet=new Set();
dataSet.add(5);
dataSet.add(3);
dataSet.add(5);
dataSet.add(4);
dataSet.add(6);
dataSet.add(5);

console.log(dataSet);

let converted=Array.from(dataSet);
console.log(converted);

dataSet.delete(5);
console.log(dataSet);

dataSet.forEach(v=>{console.log(v);})