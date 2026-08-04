const celsius = document.querySelector("td.celsius").innerText


const valueCelsius = Number(celsius)
function celsiusToFahrenheit(valueCelsius) {
    return (9/5 * valueCelsius) + 32
}

function celsiusToKelvin (valueCelsius) {
    return valueCelsius + 273
}

function celsiusToReamur (valueCelsius) {
    return 4/5 * valueCelsius
}
const fahrenheit = document.querySelector(".fahrenheit")
fahrenheit.innerHTML = celsiusToFahrenheit(valueCelsius)

const kelvin = document.querySelector(".kelvin")
kelvin.innerHTML = celsiusToKelvin(valueCelsius)

const reamur = document.querySelector(".reamur")
reamur.innerHTML = celsiusToReamur(valueCelsius)
