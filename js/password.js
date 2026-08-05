const eye = document.querySelector(".eye")
console.log(eye)
const input = document.querySelector("input")
// console.log(input)
// console.log(eye)



eye.addEventListener("click" ,()=>{
    const imgAttr = eye.getAttribute("src")
    const inputAttr = input.getAttribute("type")
    // console.log(a)
    // console.log(b)
    if ( imgAttr === "../assets/eye-open.svg" && inputAttr === "password") {
        input.setAttribute("type", "text")
        eye.setAttribute("src", "../assets/eye-closed.svg")

    } else {
        input.setAttribute("type", "password")
        eye.setAttribute("src", "../assets/eye-open.svg")
    }
    
})

const nav = document.querySelector("nav")
console.log(nav)
const hamburger =  document.querySelector(".hamburger")
hamburger.addEventListener("click", ()=>{
    nav.classList.toggle("show")
   const a = hamburger.getAttribute("src")
   if (a === "../assets/hamburger.svg") {
    hamburger.setAttribute("src","../assets/close.svg")
   } else {
    hamburger.setAttribute("src", "../assets/hamburger.svg")
   }
})