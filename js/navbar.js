const nav = document.querySelector("nav")
const dataUser = JSON.parse(window.localStorage.getItem("user"))
const btnLogin = document.querySelector(".btn-login")
console.log(btnLogin)
if (dataUser !== null ) {
    btnLogin.textContent = "Logout"
    nav.classList.remove("hidden")
}else {
    window.location.href = "../pages/login.html"
}
console.log(dataUser)

btnLogin.addEventListener("click",()=>{
    localStorage.removeItem("user")
    window.location.href = "../pages/login.html"
})