////////////////////////// Advanced JavaScript Concepts //////////////////////////
(()=>{})();  //IIFE Syntax
            //IIFE is used to avoid polluting the global namespace and  to execute async function
            
//  IIFE stands for Immediately Invoked Function Expression. It is a JavaScript design pattern 
//  that allows you to create a function and immediately execute it.
//  The purpose of using an IIFE is to encapsulate code and avoid polluting the global namespace.

//  In the provided code excerpt, there are two examples of IIFE. Let's break them down:
//  (async function getAllData(){...})() This is an IIFE that defines an asynchronous function called getAllData. 
//  The function is immediately invoked by appending () at the end.
//  The async keyword indicates that the function will contain asynchronous operations.
//  Inside the function, there are several console.log statements and await calls to the getData function.
//  The await keyword ensures that each getData call is completed before moving on to the next one. This IIFE is used to fetch data sequentially.
//  IIFE is used to execute an empty function without affecting the global namespace.
//  By using IIFE, you can create a private scope for your code, preventing variable and function name clashes with other parts of your program.
//  It's a useful technique for modularizing your code and keeping it organized.

/*-------------------------CLOSURE IN JAVASCRIPT----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


//Closure is a powerful concept in JavaScript that allows a function to retain access to variables from its parent scope, even after the parent function has finished executing. In other words, a closure is a function bundled together with its surrounding state (lexical environment).

// To understand closures, let's consider a real-life problem: creating a counter that can be incremented and decremented.

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function decrement() {
    count--;
    console.log(count);
  }

  return {
    increment,
    decrement
  };
}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1


// In this example, the createCounter function returns an object with two methods: increment and decrement. These methods have access to the count variable, even though createCounter has already finished executing.

// This is possible because of closures. When createCounter is called, it creates a new execution context with its own variable environment, which includes the count variable. The increment and decrement functions are defined within this environment, forming a closure. The returned object holds references to these functions, allowing them to access and modify the count variable.

// Closures are useful in situations where you want to encapsulate data and behavior within a function, while still allowing external access to certain functionalities. 
// They provide a way to create private variables and methods, preventing unwanted modifications from outside the function.

// In summary, closures in JavaScript allow functions to retain access to variables from their parent scope, even after the parent function has finished executing.
// They are a powerful tool for creating modular and encapsulated code.


/* -------------------------- Advanced Concepts of JavaScript ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// 1. Promises and Async/Await
// Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never. Async/await is a syntax sugar built on top of promises, making asynchronous code look more like synchronous code.

// 2. Closures
// Closures are functions that have access to variables from their outer (enclosing) function even after the outer function has finished executing. They allow for data encapsulation and can be used to create private variables and methods.

// 3. Prototypes and Prototypal Inheritance
// JavaScript is a prototype-based language, which means objects can inherit properties and methods from other objects.
//  Prototypes are used to implement inheritance in JavaScript.

//Example of Prototypal Inheritance
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
}

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof woof!");
}

const doggy = new Dog("Buddy", "Golden Retriever");
dog.sayName(); // Output: My name is Buddy
dog.bark(); // Output: Woof woof!


//Example of Prototypal Inheritance using ES6 Classes (syntactic sugar for prototypes)
class Animal {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log("Woof woof!");
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.sayName(); // Output: My name is Buddy
dog.bark(); // Output: Woof woof!



// 4. Higher-Order Functions
// Higher-order functions are functions that can take other functions as arguments or return functions as results. 
// They enable functional programming paradigms and allow for code reusability and modularity.

//Example of Higher-Order Function
function greet(name) {
  return `Hello, ${name}!`;
}

function greetUser(greet, name) {
  return greet(name);
}

const message = greetUser(greet, "Alice");
console.log(message); // Output: Hello, Alice!

// 5. Arrow Functions
// Arrow functions are a concise syntax for writing anonymous functions in JavaScript. They have a shorter syntax compared to regular functions and automatically bind the `this` value to the surrounding context.

//Example of Arrow Function
const sum = (a, b) => a + b;
console.log(sum(2, 3)); // Output: 5

const greet = name => `Hello, ${name}!`;
console.log(greet("Bob")); // Output: Hello, Bob!

const number = [1, 2, 3, 4, 5];
const squaredNumbers = number.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Arrow functions are commonly used in functional programming, event handling, and asynchronous operations like promises and async/await.

// 6. Modules and Module Bundlers
// Modules are a way to organize and encapsulate code in JavaScript. They allow for better code organization, reusability, and maintainability. Module bundlers like Webpack or Rollup are used to bundle multiple modules into a single file for deployment.

//Example of Modules
// math.js
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

// app.js
// import { add, subtract } from './math.js';

// console.log(add(2, 3)); // Output: 5
// console.log(subtract(5, 2)); // Output: 3

// 7. Event Loop and Asynchronous Programming
// JavaScript is a single-threaded language, but it supports asynchronous programming through the event loop mechanism. 
// The event loop allows for non-blocking I/O operations and ensures that JavaScript remains responsive even during long-running tasks.

//Example of Event Loop
console.log("Start");

setTimeout(() => {
  console.log("Async operation");
}, 2000);
console.log("End");

// In this example, the code is executed in the following order:
// 1. The "Start" message is logged to the console.
// 2. The setTimeout function is called to schedule an asynchronous operation.
// 3. The "End" message is logged to the console.
// 4. After a delay, the asynchronous operation is executed, and the "Async operation" message is logged to the console.

// The event loop ensures that the asynchronous operation does not block the main thread and allows other tasks to be executed in the meantime.

// 8. Error Handling and Debugging
// Proper error handling and debugging are essential for writing robust JavaScript code. JavaScript provides try-catch blocks for handling exceptions and various debugging tools like console.log, breakpoints, and browser developer tools.

//Example of Error Handling
try {
  const result = 1 / 0;
  console.log(result);
}
catch (error) {
  console.log("An error occurred:", error.message);
}

// 9. Functional Programming
// Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions.
//  JavaScript supports functional programming concepts like immutability, pure functions, and higher-order functions.

//Example of Functional Programming
const nums = [1, 2, 3, 4, 5];
const squaredNums = nums.map(num => num * num);
const evenNumbers = nums.filter(num => num % 2 === 0);
const sum = nums.reduce((acc, num) => acc + num, 0);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
console.log(evenNumbers); // Output: [2, 4]
console.log(sum); // Output: 15

// 10. ES6+ Features
// JavaScript has gone through several updates, with ES6 (ECMAScript 2015) being a significant release.
//  ES6 introduced many new features like let/const, arrow functions, classes, template literals, destructuring, spread/rest operators, and more.

//Example of ES6 Features

// let and const
let nam = "Alice";
const ag = 30;

// Arrow functions
const sum = (a, b) => a + b;

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person("Alice", 30);
person.greet();

// Template literals
const msg = `Hello, ${name}!`;

// Destructuring
const { name, age } = person;

// Spread operator
const num = [1, 2, 3];
const sum = sum(...num);
console.log(sum); // Output: 6

// 11. Web APIs and Browser Compatibility
// JavaScript interacts with web APIs provided by browsers to perform tasks like DOM manipulation, AJAX requests, and more.
//  It's essential to understand browser compatibility issues and use polyfills or transpilers to ensure cross-browser compatibility.

//Example of Web APIs
// DOM manipulation
const element = document.getElementById("myElement");
element.style.color = "red";

// AJAX requests
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Browser compatibility
const isLocalStorageSupported = typeof window.localStorage !== "undefined";
if (isLocalStorageSupported) {
  localStorage.setItem("key", "value");
}


// 12. Performance Optimization
// Performance optimization is crucial for web applications to ensure fast load times and smooth user experiences.
//  Techniques like code splitting, lazy loading, caching, and optimizing images can help improve the performance of JavaScript applications.

//Example of Performance Optimization

// Code splitting - split code into smaller chunks to reduce initial load time
import { add } from './math.js';

// Lazy loading - import modules only when needed (e.g., on button click) 
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  import('./module.js')
    .then(module => {
      module.doSomething();
    })
    .catch(error => console.log(error));
});

// Caching - store data in memory or local storage to avoid repeated fetch requests 
const cache = new Map();

async function fetchData(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url));
  }

  const response = await fetch(url);
  const data = await response.json();
  cache.set(url, data);
  return data;
}
fetchData("https://api.example.com/data");

// Optimizing images
const image = new Image();
image.src = "image.jpg";
image.onload = () => {
  console.log("Image loaded successfully");
}


// 13. Security Best Practices
// Security is a critical aspect of web development, and JavaScript developers should be aware of common security vulnerabilities like XSS (Cross-Site Scripting) and CSRF (Cross-Site Request Forgery).
//  Best practices like input validation, output encoding, and using secure APIs can help mitigate security risks.

//Example of Security Best Practices

// Input validation
const userInput = "<script>alert('XSS attack')</script>";
const sanitizedInput = userInput.replace(/<script>/g, "");

// Output encoding
const userOutput = "<p>Hello, World!</p>";
const encodedOutput = escapeHtml(userOutput);

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function(match) {
    return `&${match};`;
  });
}

// Secure APIs
fetch("https://api.example.com/data", {
  method: "GET",
  headers: { "Authorization": "Bearer",
      "Content-Type": "application/json",
    }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));



// 14. Testing and Automation
// Testing is an essential part of the development process to ensure the quality and reliability of JavaScript code.
//  Tools like Jest, Mocha, and Cypress can be used for unit testing, integration testing, and end-to-end testing of JavaScript applications.

//Example of Testing with Jest

// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// math.test.js
import { add, subtract } from './math.js';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

// To run the tests, you can use the Jest test runner by running the following command in the terminal:
// jest  - Jest will automatically find and run all test files with the .test.js or .spec.js extension in your project.

// 15. Build Tools and Task Runners
// Build tools like Webpack, Babel, and Gulp are used to automate tasks like transpiling code, bundling modules, and optimizing assets in JavaScript projects.
//  They help streamline the development workflow and improve productivity by reducing manual tasks.

// 16. Version Control and Collaboration
// Version control systems like Git are essential for managing code changes, collaborating with team members, and tracking project history.
//  Understanding Git workflows, branching strategies, and pull requests can help streamline the development process.

// 17. Progressive Web Apps (PWAs)
// Progressive Web Apps are web applications that provide a native app-like experience to users, including offline support, push notifications, and fast load times.
//  JavaScript developers can leverage service workers, web app manifests, and other technologies to build PWAs.

//Example of Progressive Web App (PWA) Features

// Service workers - enable offline support and background sync for web applications
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => console.log('Service worker registered'))
    .catch(error => console.log('Service worker registration failed:', error));
}

// Web app manifest - provides metadata for installing the web app to the home screen
{
  "name": "My PWA",
  "short_name": "PWA",
  "start_url": "/index.html",
  "display": "standalone",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "/icon.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
};

// Push notifications - allow web apps to send notifications to users even when the app is not open in the browser 

// 18. Server-Side JavaScript
// JavaScript is not limited to the client-side and can also be used for server-side development.
//  Node.js is a popular runtime that allows developers to build scalable and high-performance server-side applications using JavaScript.

// 19. WebAssembly and JavaScript Interoperability
// WebAssembly is a binary instruction format that enables high-performance execution of code on the web.
//  JavaScript developers can leverage WebAssembly to run computationally intensive tasks and achieve near-native performance in web applications.

//Example of WebAssembly and JavaScript Interoperability
// math.wasm
// (module
//   (func $add (param i32 i32) (result i32)
//     get_local 0
//     get_local 1
//     i32.add)
// )

// math.js
// const fs = require('fs');
// const { instantiate } = require('webassemblyjs');

// const buffer = fs.readFileSync('math.wasm');
// const { instance } = await instantiate(buffer);
// const result = instance.exports.add(2, 3);
// console.log(result); // Output: 5



// 20. Continuous Integration and Deployment (CI/CD)
// Continuous Integration and Deployment practices automate the process of building, testing, and deploying code changes to production environments.
//  Tools like Jenkins, Travis CI, and GitHub Actions can be used to implement CI/CD pipelines for JavaScript projects.


// The spread and rest operators are two powerful features in JavaScript that allow you to work with arrays and objects in a more flexible and concise way.
// The spread operator, denoted by three dots (...), is used to expand an iterable (like an array or a string) into individual elements.
//  It can be used in various contexts, such as function calls, array literals, and object literals.
// Here's an example of using the spread operator with an array:

const numbers = [1, 2, 3];
const expandedNumbers = [...numbers, 4, 5, 6];

console.log(expandedNumbers); // Output: [1, 2, 3, 4, 5, 6]

// In this example, the spread operator ...numbers expands the numbers array into individual elements,
//  which are then combined with the additional elements [4, 5, 6] to create a new array expandedNumbers.

// The spread operator can also be used to make a copy of an array or merge multiple arrays together:
// In this example, the spread operator is used to create a copy of the originalArray by spreading its elements into a new array copyArray.
//  It is also used to merge the elements of originalArray with additional elements to create a new array mergedArray.

// Now let's move on to the rest operator.

const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
const mergedArray = [...originalArray, 4, 5, 6];

console.log(copyArray); // Output: [1, 2, 3]
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// The rest operator, also denoted by three dots (...), is used to represent multiple elements as an array.
//  It is typically used in function parameters to capture a variable number of arguments into an array.

// Here's an example of using the rest operator in a function:

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

// In this example, the rest operator ...numbers captures any number of arguments passed to the sum function and stores them as an array called numbers. 
// The function then iterates over the elements of the numbers array and calculates the sum.

// The rest operator can also be used to extract the remaining elements of an array into a new array:

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// In this example, the rest operator ...rest captures the remaining elements of the array [1, 2, 3, 4, 5] after assigning the first two elements to the variables first and second.
//  The remaining elements are then stored in the rest array.

