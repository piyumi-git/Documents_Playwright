
let dataMap=new Map();
dataMap.set("Name","Bob");
dataMap.set("Age","50");
dataMap.set("City","Wellington");

let numberMap=new Map();
numberMap.set(1,"One");
numberMap.set(2,"Two");

console.log(dataMap);

dataMap.forEach(value=>console.log(value));
let mapKeys=dataMap.keys();
console.log(mapKeys);