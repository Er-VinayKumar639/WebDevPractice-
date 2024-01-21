// *********************Notes**********************************************//
//Access element

//document.getElementById("#value")
//document.getElementByClassName(".value")
//document.getElementByName("value")
//document.getElementByTagName("tagname")

//document.querySelector(".val" <for class>, "#value" <for id>, "value" <for tagname> ") 
//It returns the first element of the specified tag if given the tag name

//similarly 

//document.querySelectorAll(".className"<for class> or "tagName"<for tag>)


let h2 = document.querySelector("h2")
h2.innerText +=" from apna college"

const divs= document.querySelectorAll(".mydiv")
console.log(divs[0])  //we can use index property of array because it returns HTMLcollection
divs[0].innerHTML = "new unique value 0"
divs[1].innerHTML = "new unique value 1"
divs[2].innerHTML = "new unique value 2"

let div = document.querySelector("#box")

//Attributes

// getAttribute(attr)
// setAttribute(attr, value)

let para = document.querySelector("p")
console.log(para.getAttribute("class"))
para.setAttribute("class", "paragraph1")



//style

//node.style = "value " : It adds the styling in inline format
// so we do not use this technique frequently
h2.style.background="lightblue"
h2.style.fontFamily="Helvetica"
h2.style.color="Red"

// using classList
//obj.classList

//classList.add() to add new classes
//classList.remove() to remove classes
//classList.contains() to check if class exist
//classList.toggle() to toggle between add and remove
para.classList.toggle("mypara")
para.classList.add("para")
para.classList.add("hero")
console.log(para.classList)
para.classList.add("green")
para.classList.add("mainPara")
para.classList.remove("mainPara")
para.classList.contains("mainPara")

// NAVIGATION IN JAVASCRIPT
// parent and child Element
//sibling 
para.parentElement
para.children
para.previousElementSibling
para.nextElementSibling
para.childElementCount

//we can use indexing to get the element at this index
para.children[1]
//Insert element

//using createElement() method

let newP = document.createElement("p")
newP.innerText="Hi this is new Paragraph"
let body= document.querySelector("body")
body.appendChild(newP)
console.log(newP)

newP.append("This is the appended text")
console.log(newP)
console.dir(newP)
// prepend() method

console.log(newP.prepend("This is prepended text "))

//insertAdjacent() method

let btn = document.createElement("button")
btn.innerHTML = "NEW BUTTON!"
let p = document.querySelector("p")
p.insertAdjacentElement("beforebegin", btn)
//p.insertAdjacentElement("afterbegin",btn)
//p.insertAdjacentElement("beforeend",btn)
//p.insertAdjacentElement("afterend",btn)

//REMOVE ELEMENTS

//removeChild()
//remove()
body  = document.querySelector("body")
body.removeChild(btn)

//Be careful while using remove()

//p.remove()
//body.remove()

