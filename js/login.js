const eye = document.querySelector(".eye")
const input = document.querySelector('.input-password input[type="password"]')

eye.addEventListener("click" ,()=>{
    const imgAttr = eye.getAttribute("src")
    const inputAttr = input.getAttribute("type")
    if ( imgAttr === "../assets/eye-open.svg" && inputAttr === "password") {
        input.setAttribute("type", "text")
        eye.setAttribute("src", "../assets/eye-closed.svg")

    } else {
        input.setAttribute("type", "password")
        eye.setAttribute("src", "../assets/eye-open.svg")
    }
    
})

const nav = document.querySelector("nav")
const passValid = document.querySelector(".pass")
const form = document.querySelector("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const name = e.target.name.value
    const password = e.target.password.value
    if (password.length < 8) {
        passValid.classList.remove("transparent")
        return
    }
    passValid.classList.add("transparent")
    nav.classList.remove("hidden")
    alert("login berhasil")
    window.location.href = "../pages/calc.html"
    const inputUser = {
        name,
        password
    }
    window.localStorage.setItem("user",JSON.stringify(inputUser))
    const getData = window.localStorage.getItem("user")
})