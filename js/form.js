const body = document.querySelector("body")
const header = document.querySelector("header")
const form = document.createElement("form")
const h1 = document.createElement("h1")
h1.textContent = "FORM SURVE PENONTON FILM"


// name
const divName = document.createElement("div")
divName.classList.add("name")
const labelName = document.createElement("label")
labelName.innerText = "nama : "
labelName.setAttribute("for","nama")
const inputName = document.createElement("input")
labelName.setAttribute("type", "text")
inputName.setAttribute("id","nama")
divName.append(labelName)
divName.append(inputName)

//gender
const divUmur = document.createElement("div")
divUmur.classList.add("age")
const labelUmur = document.createElement("label")
labelUmur.innerText = "Umur : "
labelUmur.setAttribute("for","umur")
const inputUmur = document.createElement("input")
inputUmur.setAttribute("type", "number")
inputUmur.setAttribute("id", "umur")
divUmur.append(labelUmur)
divUmur.append(inputUmur)

//jenis kelamin
const divGender = document.createElement("div")
const askGender = document.createElement("p")
askGender.innerText = "Jenis Kelamin"
divGender.classList.add("gender")
const labelMale = document.createElement("label")
const inputMale = document.createElement("input")
const labelFemale = document.createElement("label")
const inputFemale = document.createElement("input")

inputMale.setAttribute("type", "radio")
inputMale.setAttribute("id","male")
inputMale.setAttribute("name", "gender")
labelMale.setAttribute("for", "male")
labelMale.innerText = "Laki Laki"

inputFemale.setAttribute("type", "radio")
inputFemale.setAttribute("name", "gender")
inputFemale.setAttribute("id", "female")
labelFemale.setAttribute("for", "female")
labelFemale.innerText = "Perempuan"

divGender.append(askGender)
divGender.append(inputMale)
divGender.append(labelMale)
divGender.append(inputFemale)
divGender.append(labelFemale)

// Hobi
const divHobi = document.createElement("div")
divHobi.classList.add("hobi")
const labelHobi = document.createElement("label")
labelHobi.setAttribute("for", "hobi")
labelHobi.innerText = "Apakah anda hobi menonton film? "
const selectHobi = document.createElement("select")
selectHobi.setAttribute("id", "hobi")
const optionYes = document.createElement("option")
optionYes.setAttribute("value", "yes")
optionYes.innerText = "yes"
const optionNo = document.createElement("option") 
optionNo.setAttribute("value", "no")
optionNo.innerText= "no"

divHobi.append(labelHobi)
divHobi.append(selectHobi)
selectHobi.append(optionYes)
selectHobi.append(optionNo)


// Genres
const divGenre = document.createElement("div")
divGenre.classList.add("genre")
const askGenre = document.createElement("p")
askGenre.textContent = "Genre film yang disuka"
divGenre.append(askGenre)
const genres =  ["action", "thriller", "horror", "comedy", "romance"]
for (let i = 0 ; i < genres.length; i++) {
    const labelGenre = document.createElement("label")
    // console.log(genres[i])
    labelGenre.setAttribute("type", genres[i])
    labelGenre.setAttribute("for",genres[i])
    labelGenre.textContent = genres[i]
    const inputGenre = document.createElement("input")
    inputGenre.setAttribute("id", genres[i])
    inputGenre.setAttribute("type", "checkbox")
    divGenre.append(inputGenre)
    divGenre.append(labelGenre)
}

const submit = document.createElement("button")
submit.textContent = "submit"


body.append(form)
// container.append(form)
form.append(h1)
form.append(divName)
form.append(divUmur)
form.append(divGender)
form.append(divHobi)
form.append(divGenre)
form.append(submit)


