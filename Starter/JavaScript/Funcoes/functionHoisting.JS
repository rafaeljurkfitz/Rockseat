//function hoisting

/*
sayMayName();

function sayMayName(){
  console.log('Rafael')
}
*/
//Funciona

/*
sayMayName();

const sayMayName = function (){
  console.log('Rafael')
}
*/
//Nao funciona

/*
sayMayName();

var sayMayName = function (){
  console.log('Rafael')
}
*/
//Nao funciona, nao vai ser elevado. 

sayMayName();

function sayMayName() {
  console.log('Rafael')
}