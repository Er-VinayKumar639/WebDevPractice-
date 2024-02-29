let n = 5;
for(let i = 0 ; i<n ; i++){
  console.log("Hello ",i);
}
console.log(process.argv);

let args = process.argv;

for(let i=0; i<args.length;i++){
  console.log("Hello to ",args);
}

//Module Exports : suppse Math.js is defined by us.
// WE can put similar methods and props
// in a file called module.
// we can access them by using module.exports

//require() a built in method to include external modules that exist in separate files.
//module.exports        a special object 

const math = require("./math");


console.log(math);

console.log(math.sum(2,2));
console.log(math.pi);


//import 
import { sum , PI } from "./math";
console.log(sum(1,2));