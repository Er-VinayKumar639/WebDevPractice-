// //setTimeOut fn
// console.log("I");
// console.log("eat");
// setTimeout(() => {
//   console.log("ice creame ");
// // }, 4000);

// let stocks = {
//   Fruits : ["strawberry", "grapes", "Banana", "apple"],
//   liquid : ["water", "ice"],
//   holder : ["cone", "cup", "stick"],
//   toppings : ["chocolate", "peanuts"],
// }
 
// let order = (fruitName, callProduction) => {
//   console.log("Order placed, Please Wait>>  ");
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[fruitName]} was selected.`)
//   }, 2000)
//   callProduction();
// };

// let production = () => {
//   console.log("Order Recieved, Starting Production..");
//   setTimeout(() => {console.log("Production has started:") },0o0)

// };
// order(0 , production);
// console.log(stocks.Fruits[2]);


// topics to be covered
//Async await
//callbacks
//callback hell
//promises
//promise chaining

// async await  >> promise chains >> callback hell (order of preference by ease)

//Synchronous - means the code runs in a particular sequence of instruction given 
//in the program
//Each instructoin wait for the previous instruction to complete its  instruction.

//Asynchronous - Due to asynchronous programming, sometimes imp instruction get
//blocked due to some previous instruction, which causes a delay in the UI.

//Asynchronus code execution allows to execute next instructions immediately and doesn't block the flow




//Callback Hell

// function getData(dataId, getNextData){
//   //2s
//   setTimeout(() => {
//     console.log("Data", dataId);
//     if(getNextData){
//       getNextData();
//     }
//   }, 4000)
// }

// //synchronous programming
// // getData(1);
// // getData(2);
// // getData(3);


// console.log("Getting data1...");       //Asynchronous 
// getData(1, () => {
//   console.log("Getting data2...");
//   getData(2,()=> {
//     console.log("Getting data3...");
//     getData(3,() => {
//       console.log("Getting data4...");
//       getData(4);
//     });
//   });
// });

// //REDUCE callback hell using promises


//Promise
// let promise = new Promise((resolve,reject) => {
//   console.log("I am a promise.");
//   resolve("Success");
  //reject("Some Error Occured")
// });
//thus we find that there are three states of promises: pending, fulfilled and rejected.
// function getData(dataId){
//   return new Promise((resolve,reject) => {
//     setTimeout(() =>{
//       console.log("data ",dataId);
//       resolve("Success");
//     }, 3000)
//   })
// }

//Solving Using Promise chain.....

// getData(1).then((res)=> {
//   console.log(res);
//   getData(2).then((res)=> {
//     console.log(res);
//     getData(3).then((res)=> {
//       console.log(res);
//     });
//   })
// });
//Enhanced promise chain.......
// console.log("Getting data1.......");
// getData(1)
// .then((res) => {
//   console.log("Getting data2.....");
//   return getData(2);
// })
// .then((res)=> {
//   console.log("Getting data3.....");
//   return getData(3);
// })
// .then((res)=> {
//   return console.log(res);
// });
// console.log(getData(123));
// console.log(promise);

// let getPromise = () =>{
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise.");
//     resolve("Success");
//   });
// };

// let promise2 = getPromise();
// promise2.then(()=>{
//   console.log("Congratulations! Promise has fullfilled.");
// });
// promise2.catch(()=>{
//   console.log("Rejected! Some error has been occurred.");
// });


//Promise Chaining

// function asyncFunc1(){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       console.log("Data 1");
//       resolve("Success!");
//     }, 4000);
//   });
// }

// function asyncFunc2(){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       console.log("Data 2");
//       resolve("Success!");
//     }, 4000);
//   });
// }
// console.log("Fetching Data 1...... ")
// let p1 = asyncFunc1();
// p1.then((res)=>{
//   console.log(res);
// });

// console.log("Fetching Data 2...... ")
// let p2 = asyncFunc2();
// p2.then((res)=>{
//   console.log(res);
// });

// console.log("Fetching Data 1...... ")
// asyncFunc1().then((res)=>{
//   console.log("Fetching Data 2......");
//   asyncFunc2().then((res)=>{
//   console.log("Success!")
//   });
// });

//async-await

//async fn always return a promise
//await pauses the execution of the surrounding async function until the promise is settled.


// async function hello(){
//   return console.log("Hello")
// }

// function api(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData(){
//   await api();
//   await api();
// }

function getData(dataId){
  return new Promise((resolve,reject) => {
    setTimeout(() =>{
      console.log("data ",dataId);
      resolve("Success");
    }, 3000)
  })
}
//IIFE-Immediately Invoked Function Expression  -We can use it in a fn only once
(async function getAllData(){
  console.log("Getting data 1....");
  await getData(1);
  console.log("Getting data 2....");
  await getData(2);
  console.log("Getting data 3....");
  await getData(3);
})();

(()=>{})();  //IIFE Syntax
            // to avoid polluting the global namespace and  to execute async function

            //Thank u!