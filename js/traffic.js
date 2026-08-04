
const red = document.querySelector("div.red")
const yellow = document.querySelector("div.yellow")
const green = document.querySelector("div.green")
function trafficLight () {

    
            yellow.classList.add("yellow-off")
            green.classList.add("green-off")
            setTimeout(()=>{
                red.classList.add("red-off")
                yellow.classList.remove("yellow-off")
            setTimeout(()=>{
                yellow.classList.add("yellow-off")
                green.classList.remove("green-off")
            setTimeout(()=>{
                green.classList.add("green-off")
                red.classList.remove("red-off")
                    },1000)
        
                },2000)
        
            },3000)

        }

trafficLight()


