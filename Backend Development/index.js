//node REPL -> Read Evaluate Print Loop
// node command provides environment for running js in terminal
//we can run js files using node 
//e.g.     node filename.js

//process - This object provides information about, and control over the current node.js process.

// process.argv  - returns an array containing the command-line arguements passed when the node.js process was launched

//NPM- npm is the standard package manager for node.js ->its basically the library of packages

// eg. react.js and express.js are packages which we can require by npm

//package.json - The package.json contains descriptive and functional metadata about a project, 
// such as a name , version and dependencies.

// npm init >>> will initialise a project 

// npm install >>> will install all dependencies included in package.json in node_modules file

//EXPRESS NOTES : 

//library :a library is a collection of pre-written code that 
//          can be used to perform specific tasks.

// eg. axios

//framework : a framework is a set of pre-written code that provide a 
//             a structure for developing software applications.

// eg.  express

//EXPRESS -> A node.js application framework that helps us to make web application.

// It is used for server side programming

const express = require("express");

const app = express();

let port= 3000;

//listen creates a web server which continuously listen the requests from api 's

app.listen(port, ()=>{
  console.log(`App is listening on port ${port}`);
});


//app.use(arrow fn with param req and res) listens each type of request and 
// executes the callback inside it
// app.use((req, res)=>{
//    console.log("request recieved");
//    let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li>"
//    //res.send(`<h1>some html</h1> ${code}`);
//    res.send(code);
//   });



  //  ROUTING 

  // It is process of selecting a path for traffic in a network or between or across multiple networks.

  // // 
  // app.get("/apple", (req, res) => {
  //   res.send("You contacted apple path");
  // });

  // app.get("/",(req,res) => {
  //   res.send("You contacted root path");
  // });

  // app.get("/orange", (req, res) => {
  //   res.send("You contacted orange path");
  // });

  // app.get("/*", (req, res) => {
  //   res.send("This path does not exist.");
  // })

  // app.get("/:username/:id", (req, res) =>{
  //   console.log(req.params);
  //   let {username, id} = req.params;
  
  //   res.send(`Welcome to the page of @${username}`);
  // });

  app.get("/search",(req, res) => {
    console.log(req.query);
    res.send("No results");
  });





