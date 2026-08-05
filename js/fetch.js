async function fetchPokemon() {
    try {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"
        const res = await fetch(url)
        const data = await res.json()
        const {results} = data
        
        const fetchAllPokemons = results.map( async (pokemon) => {
            const res2  = await fetch(pokemon.url)
            const allData = await res2.json()    
            const {name, types, sprites} = allData
            const getType = types.map((i)=> i.type.name )
            const getSprite = sprites.front_default
            return {
                name: name, 
                sprite: getSprite,
                type: getType
            } 
        });
        const allRes = await Promise.all(fetchAllPokemons)
        return allRes
        if (!res.ok) throw new Error("could not fetch data") 
    }catch(err) {
        console.error(err.message)
    }

} 

const container = document.querySelector(".container")
console.log(container)

async function renderPokemons() {
    try {
        const data = await fetchPokemon()
        for(let i = 0 ; i < data.length; i ++ ) {
            const card = document.createElement("div")
            card.classList.add("card")
            const img = document.createElement("img")
            img.setAttribute("src",data[i].sprite)
            img.setAttribute("alt", data[i].name)
            const name = document.createElement("p")
            name.textContent = data[i].name
            card.append(img)
            card.append(name)
            for(let j = 0; j < data[i].type.length; j++ ) {
                const element = document.createElement("span")
                element.textContent = data[i].type[j]
                card.append(element)
            }
            
            container.append(card)
        }
    }catch(err) {
        console.error(err.message)
    }
}
// fetchPokemon()

document.addEventListener("DOMContentLoaded", renderPokemons)


