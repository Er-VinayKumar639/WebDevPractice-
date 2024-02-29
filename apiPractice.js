//API
//fetch API - The fetch api provides an interface for fetching(sending / recieving) resources.

//It uses Request and Responce object.

//The fetch() method is used to fetch a resource(data).
//Syntax:
//let promise = fetch(url, [options]);

let URL = "https://cat-fact.herokuapp.com/facts";

let promise = fetch(URL);
console.log(promise);
const factPara = document.querySelector("#fact");
const button = document.querySelector("#btn");
const getFacts = async ()=>{
  let response = await fetch(URL);
  //console.log(response);  //json format
  let data = await response.json();
  
  factPara.innerText=data[0].text + data[2].text +data[3].text
}  

//Implement using promise Chaining....

function getFacts(){
  fetch(URL).then((res)=>{
     return res.json();
  }).then((data)=>{
    return factPara.innerText = data[0].text + data[2].text;
  })
}

button.addEventListener("click",getFacts);


//GET request      (default)

//AJAX is asynchronous JS and XML/JSON ,  also in today terms AJAJ
//JSON is JavaScript Object Notation

//json() method returns s second promise that recieves with 
//the result of parsing the response body text as json
//Input is json and output is js object

// json()  returns Response (JSON) -> JS object 







