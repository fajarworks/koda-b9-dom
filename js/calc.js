const b = document.querySelector("body")
const buttonContainer = document.createElement("div")
const buttonInput = ["0", "Deg | Rad", "x!", "(", ")", "%", "AC", "Inv", "sin", "ln", "7", "8", "9", "÷", "π", "cos", "log", "4", "5", "6", "x", "e", "tan", "√", "1", "2", "3", "-", "Ans", "EXP", "xʸ", "0", ".", "=", "+"]
for (let button of buttonInput) {
    const buttonContent = document.createElement("div")
    buttonContent.textContent = button
    
    buttonContainer.appendChild(buttonContent)
    
}
b.append(buttonContainer)