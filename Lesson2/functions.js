//function greet() {
//console.log("Welcome")
//}
//function add(a, b){
  //  const result = a + b;
  //  return result;
//}

//let multiply = function (a,b){
 //   result = a*b;
 //   return result;
//}

//greet();
//console.log(add(5,6));
//console.log(multiply(2,3));

//let greetV2 = () =>{
    //return "WelcomeV2";
    //console.log("Welcome V2");
//}

let addV2 = (a,b) => {
const result = a+b;
return result;
}
console.log(addV2(5,6));


let getAverage = (a,b) => {
    return (a+b)/2;
}
let double =(a) => {return a*2};
let doubleV2 = a => { return a*2 };
let doubleV3 = a => a*2;

console.log ("Double the value =", doubleV3(2));
console.log (`Double the value = ${doubleV3(15)}`);

let arr = [2,3,4,6,8,9];
let arr2 = arr.map(v => {
    return v*3
})
console.log(`Using map function, new array is ${arr2}`);