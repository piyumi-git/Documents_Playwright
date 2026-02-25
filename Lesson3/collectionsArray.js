
//Arrays => to store any values set
// List =>
//Map
//Set => if we have a unique value set
//Object => can store values eg (information of a person)

//Arrays
let numbers=[23,54,67,56,32];//index
numbers[2]=100;

console.log(numbers[1]);
console.log(numbers);
console.log(`Array length is ${numbers.length}`);

//using inbuilt object 'Array'
let number2=new Array(100,200,300);
let cities=new Array("WLG","AKL","CHCH");
console.log(cities);

//print array values as a string using'toString' function
console.log(cities.toString());

//print array values joining with something
console.log(cities.join("***"));
console.log(cities.join(" is closer to "))

//For loop
let names=new Array("John","Tom","Bill");
for(let i=0;i<3;i++)
    { names[i]= names[i]+" =";
    }
    console.log(names);

    //forEach -> reads individual value in the array
    names.forEach((val)=>
        { return val+"_";
        }
    );
    console.log(names);

    //
    for(let count=0; count<10; count=count+2){
        console.log(count)
    }
let scores=[25,64,84,91,45,74];
let scores2=scores.forEach(val=>{return val+3;});
console.log(scores);    



let newScoreWithMap=scores.map(val=>{
    return val+3
});
 console.log(newScoreWithMap);

 for(let score of scores){
    console.log(scores)
 }

 //summary
 for(let i=0;i<names.length;i++){
    console.log(names[i]);
 }

scores.forEach(v=>{return v+3});

 let scoresV2=scores.map(v=>{return v+3;});
    
for (val of scores){console.log(val);}

//Array ----> more in built functions
let scores3=[23,45,67,78,89];
console.log(scores3[1]);
console.log(scores3);
scores3.push(4);
console.log(scores3);
scores3.shift();
console.log(scores3);
scores.unshift(1000);
console.log(scores3);

//map function creates a new array. forEach function doesn't create a new array
let scores4=scores3.map((v)=>{return v*3;})

let scores5=scores3.map(v=>v*3);
console.log("Original", scores3);
console.log("Modified with map", scores5);

//forEach function
console.log("Original, scores3");
scores3.forEach((v)=>{v=v*5; console.log(v)});
console.log(scores3);

scores3.forEach((v,i,arr)=>{arr[i]=v*2;})
console.log("Original", scores3);

let overOneFifty=scores3.filter(v=>v>150);
console.log("Over one fifty",overOneFifty);

let sum=scores3.reduce((acc,val)=>acc=acc+val);
console.log("Sum of the array is ",sum);

let is45Available=[25,64,84,91,45,74].includes(44);
console.log(is45Available);

console.log([25,64,84,91,45,74].some(v=>v>80));
console.log([25,64,84,91,45,74].every(v=>v>80));

