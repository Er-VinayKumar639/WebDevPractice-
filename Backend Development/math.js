const sum = (a,b) =>{
  return a+b;
}
const mul =(a,b)=> a*b;
const pi = 3.1415;
const g = 9.8;

//module.exports="123";
// module.exports="Hello";


// let obj = {
//   sum : sum,
//   mul : mul,
//   g : g,
//   pi : pi
// }

//OR

// module.exports = {
//   sum : sum,
//   mul : mul,
//   g : g,
//   pi : pi
// };

//OR


// module.exports.sum = (a,b) => a+b;
// module.exports.mul = (a,b) => a*b;

// module.exports.pi = 3.1415;
// module.exports.g = 9.8;

//or

exports.sum = (a,b) => a+b;
exports.mul = (a,b) => a*b;

exports.pi = 3.1415;
exports.g = 9.8;


// module.exports=obj;