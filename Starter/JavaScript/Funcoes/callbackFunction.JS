//callback function

function sayMyName(name){
  console.log('bloco de codigo antes de executar a callback')
  name()
  console.log('bloco de codigo depois de executar a callback')
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)