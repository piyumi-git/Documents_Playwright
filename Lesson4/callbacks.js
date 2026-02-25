
// //callback
function greet(name, callback)
{console.log("Hello", name); 
callback()
}
    
   
function howAreYou(){console.log("How are you?");}  
    

function goodBye(){console.log("Goodbye");} 
    

 greet("Aruna", howAreYou);
 greet("Ruwani", goodBye);

greet ("Anjana", function(){console.log("See you");})
greet("Anjana",() => {console.log("Welcome to the Course");})

const add = (a,b) => a + b;
const multiply = (a,b) => a*b;

function calculate(a,b,operate){console.log(operate(a,b));}

calculate(2,3,add);
calculate(4,5,multiply);
calculate(2,4,(a,b) => {return a/b;})
calculate(2,4,(a,b) => a/b);


// //synchronous | asynchronous

// function printOne(callback){
//     setTimeout(() => {
//         console.log("One");
//         callback();
//     },500);
// }

// function printTwo(callback){
//     setTimeout(() => {
//         console.log("Two");
//         callback();
//     },300);
// }

// function printThree(callback){
//     setTimeout(() => {
//         console.log("Three");
//         callback();
//     },1000);
// }


// printOne(()=>{
//     printTwo(() => {
//         printThree(() => {})
//     })
// });

// printOne(function(){
//     printTwo(function() {
//         printThree(function(){       
//         });
//     });
// });

// function test1(callback){
//     printOne(()=> {
//         printTwo(()=>{
//             printThree(()=>{
//                 callback();
//             });
//         });
//     });
// }

// function test2(){
//     printOne(function(){
//         printTwo(function(){
//             printThree(function(){
//                 console.log("All done");
//             });
//         });
//     });
// }

// test1(()=>{test2();})


//const promise = new Promise((resolve,reject)=>
    //{const success=false;
    //if(success){ 
        //resolve("Successfully executed");
//}
//else{
    //reject("Rejected");
   // }
//})

//promise.then(message=>console.log(message)).catch(error=>console.log(error));

//async await

// async function cal({
//     await printOne()
//     await printTwo()
//     await printThree()
// })


// const promise1 = Promise.resolve(()=>
//     {console.log("Promise1");}
// )

// const promise2 = Promise.resolve(()=>
//     {console.log("Promise2");}
// )
//Promise.all([promiseA,promiseB]).then(()=>{});
//States of a Promise
//Pending, Resolve,Reject
//Promise.all()//wait until all promises are resolved
//Promise.race()//Execute the promiseonce it is resolves, get each as resolved.

const promiseA =new Promise((resolve) => {
    setTimeout(()=>{
    console.log("promiseA");
    resolve();
},2000);
});

const promiseB =new Promise((resolve) => {
    setTimeout(()=>{
    console.log("promiseB");
    resolve();
},7000);
});

Promise.all([promiseA,promiseB]).then(()=> console.log("Validate Now"));







