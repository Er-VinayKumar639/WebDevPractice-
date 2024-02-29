//**********  PRACTICE    *********** */
let btn = document.querySelector("button");
//Events 
//ondblclick
// onclick
btn.onclick = ()=>{
  console.log("Do you need help? ")

// // }
btn.innerText = " Like"
console.log(btn)
let body = document.querySelector("body");



let btn3 = document.createElement("button")
btn3.innerText = "Subscribe"
body.append(btn3)


let btn4 = document.createElement("button")
btn4.innerText = "Share"
body.append(btn4)

let btn5 = document.createElement("button")
btn5.innerText = "Next"
body.append(btn5)

let btn6 = document.createElement("button")
btn6.innerText = "Comment"
body.append(btn6)

//to remove event listener , the reference of the 
//callback fn passed to both - addEventListener and 
// removeEventListener 

let handler1 = (evt)=>{
  btn.style.backgroundColor = "Blue"
  btn.style.color = "white"
  btn.style.fontFamily = "Sagoe UI"
}

btn.addEventListener("click",handler1)
btnhandler2=()=>{
btn.style.backgroundColor = "red",
btn.style.color = "white",
btn.style.display = "flex",
btn.style.fontFamily = "Sagoe UI"}
btn3.addEventListener("click",handler2)
btntn3.removeEventListener("click",handler2);


//Ques- 
//Create a toggle button to change the screen to dark mode
//when it is in light mode and vice versa.
let modeBtn = document.querySelector("#btn");
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click",()=>{
  if(currMode==="light"){
    body.classList.add("dark")
    currMode = "dark" 
    body.classList.remove("light")
  }
  else{
    body.classList.add("light")
    currMode="light"
    body.classList.remove("dark")
  }
})


