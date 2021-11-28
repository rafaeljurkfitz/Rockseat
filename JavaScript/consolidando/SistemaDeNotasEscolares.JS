/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

function score(number) {
    let A = number >= 90 && number <= 100
    let B = number >= 80 && number <= 89
    let C = number >= 70 && number <= 79
    let D = number >= 60 && number <= 69
    let F = number < 60 && number >= 0
    let scoreFinal

    if(A) {
        return scoreFinal = 'A'
    } else if(B) {
        return scoreFinal = 'B'
    } else if(C) {
        return scoreFinal = 'C'
    } else if(D) {
        return scoreFinal = 'D'
    } else if(F) {
        return scoreFinal = 'F'
    } else {
        return scoreFinal = 'Nota Invalida'
    }
}

console.log(score(110))
console.log(score(50))
console.log(score(76))
console.log(score(82))
console.log(score(92))
console.log(score(100))
console.log(score(60))