/*
1.Declare uma variavel de nome weight
let weight
*/

/*
2.Que tipo de variavel é acima?
Resposta: indefinida
console.log(typeof weight)
*/

/*
3.Declare uma variavel e atribua valores para cada um dos dados

let name, age, stars, isSubscribed

name = 'Rafael'
age = 15
stars = 8.8
isSubscribed = true

console.log(typeof name)
console.log(typeof age)
console.log(typeof stars)
console.log(typeof isSubscribed)
*/

/*4. A variavel student abaixo é de que tipo de dado?

4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

4.2 Mostre no console a seguinte mensagem:
  <name> de idade <age> pesa <weight> kg.

  Atencao, subtitua <name>, <age> e <weight> pelos valores de cada propriedade do objeto.


let student{}
Resposta da 4 = "Variavel do tipo objeto"
*/


let student = {
  name: "Rafael",
  age: 15,
  weight: 85.4,
  isSubscribed: true
}

/*
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg.`)
*/

/*
5. Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio.
*/

//let students = []

/*
6. Retribua valor para a variavel acima, colocando dentro dela o objeto student da questao 4. (Nao copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

let students = [
  student
]

//console.log(students)

/* 
7. Coloque no console o valor da posicao zero do Array acima
*/

//console.log(students[0])

/*
8. Crie um novo student e coloque na posicao 1 do Array students
*/

let new_student = {
  name: "Gabriel",
  age: 16,
  weight: 75.4,
  isSubscribed: true
}

students[1] = new_student
console.log(students[1])

/*
9. Sem rodar o codigo responda qual é a resposta do codigo abaixo e por que? Apos sua resposta, rode o codigo e veja se voce acertou.

console.log(a)
var a = 1

A resposta é que o console vai mostrar undefined.
var a 

console.log(a)
a = 1

console.log(a)
var a = 1

*/