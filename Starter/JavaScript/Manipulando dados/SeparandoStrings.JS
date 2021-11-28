/*
    Manipulando Strings e números

    *Separe um texto que contem espacos, em um novo array onde cada texto é uma posicao de array. Depois disso, transforme o array em um texto e onde eram espacos, coloque _

*/

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderScore = myArray.join("_")
console.log(phraseWithUnderScore.toLowerCase())
