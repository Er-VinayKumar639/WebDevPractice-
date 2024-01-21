//Que. - 1
let body = document.querySelector("body")

let heading = document.createElement("h1")
body.append(heading)
heading.innerText = "DOM Practice"
heading.style.textDecoration = "underline"
heading.style.backgroundColor= "purple"

let p1 = document.createElement("p")
p1.innerHTML = "Apna College<strong> Delta </strong> Practice"
body.append(p1)


let h1 = document.createElement("h1")
h1.style.color = "red"
body.appendChild(h1)

h1.innerText = "Hey I'm red!"
//Que. - 2
const para = document.createElement("p");
body.appendChild(para);
para.innerText = "I'm blue para!"
para.style.color = "blue"

//Que. - 3

let div = document.createElement("div");
div.style.backgroundColor = "hotpink"
body.appendChild(div);

let h = document.createElement("h1")
div.appendChild(h)
h.innerText = "I'm in div"

let p = document.createElement("p")
p.innerText = "ME TOO!"
div.append(p)
div.style.border = "solid black "

/////////////////DONE//////////////////////////

//Exercise-2

let btn = document.createElement("button")
btn.textContent = "Click me!"
let ip = document.createElement("input")
body.append(btn)
body.append(ip)
ip.setAttribute("placeholder","username")
btn.setAttribute("id","btn1")
console.log(document.getElementById("btn1"))
btn1.style.backgroundColor = "blue"
btn1.style.color = "white"
console.log(document.querySelector("#btn1"))



