// arrays
// list
// map
// set
// object

let person =[ "Piyumi", 36, "Churton Park"];
let person2 =[ "Tharindi", 30, "NewTown"];
let person3 = {
    name:"Dilantha",
    age :43,
    city:"Churton Park"
}

let numbers = [23,54,67,54,32];
console.log(numbers[1]);

numbers[2] = 100,
console.log (numbers);

console.log(`Array length is ${numbers.length}`);

let numbers2 = new Array(100,200,500);

let cities = new Array("WLG","AKL","CHCH");
console.log(cities);
console.log(cities.toString());
console.log(cities.join());
console.log(cities.join(' *** '));

let names = new Array("John","Bob","Lenard");
//console.log(names[3]); (this is wrong- length out of bounds)

//for (let i=0; i<3 ; i++) {
    //names [i] = names[i]+ "_";

//names.forEach((val) => {
   // return val+"_"
//});


//}
//console.log(names);

//for (let count = 0; count<10; count=count+2){
  //  console.log(count)
//}

let score2 = [25,64,84,91,45,74];
let newScore = score2.forEach(val=> {
    return val+3;
})
console.log (score2);

let newScoreWithMap = score2.map(v => 
    {return v+3});

console.log(newScoreWithMap);

for(let score of scores){
    console.log(score);
}

for(let i =0; i< names.length; i ++){
    console.log(names[i]);
}

scores.forEach(v => { return v+3;});

let scoresV2 = scores.map