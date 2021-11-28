/*
    Function() contructor

    *expressão new
    *criar um novo objeto
    *this keyword
*/

function Person(name){
  this.name = name
  this.walk = function() {
    return this.name + " esta andando"
  }
}

const rafael = new Person("Rafael")
const joao = new Person("Joao")
console.log(rafael.walk())
console.log(joao.walk())

let nome = new String("Julia")
console.log(nome)

let date = new Date("2021-10-8")
console.log(date)
